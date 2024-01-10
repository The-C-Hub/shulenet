import { Injectable } from '@nestjs/common';
import { MediaRepository } from '@common/media/media.repository';
import { IUploadMediaResponse } from '@common/media/media.types';

@Injectable()
export class MediaService {
  constructor(private readonly _mediaRepository: MediaRepository) {}

  public async uploadImage(
    fileName: string,
    storageBucketName: string,
    file: Express.Multer.File,
  ): Promise<IUploadMediaResponse> {
    const response = await this._mediaRepository.uploadImageFile(
      fileName,
      storageBucketName,
      file,
    );
    return response;
  }
}
