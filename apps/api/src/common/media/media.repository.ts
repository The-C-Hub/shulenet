import { Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from '@common/supabase/supabase.service';
import { compressImage } from '@common/media/media.helpers';
import { BaseException } from '@common/exceptions/base.exception';
import { IUploadMediaResponse } from '@common/media/media.types';

@Injectable()
export class MediaRepository {
  private readonly _supabase: SupabaseClient;

  constructor(private readonly _supabaseClientFactory: SupabaseService) {
    this._supabase = _supabaseClientFactory.createAdminClient();
  }

  public async uploadImageFile(
    fileName: string,
    storageBucketName: string,
    file: Express.Multer.File,
  ): Promise<IUploadMediaResponse> {
    const compressedImageBuffer = await compressImage(file, 500);
    const { data, error } = await this._supabase.storage
      .from(storageBucketName)
      .upload(fileName, compressedImageBuffer, {
        cacheControl: '3600',
        contentType: file.mimetype,
        upsert: true,
      });
    if (error) {
      throw new BaseException(error.message);
    }
    const { data: publicUrl } = this._supabase.storage
      .from(storageBucketName)
      .getPublicUrl(fileName);
    const response = {
      ...data,
      ...publicUrl,
    };
    return response;
  }
}
