import { Injectable } from '@nestjs/common';
import { SubjectRepository } from '@subject/subject.repository';
import { CreateSubjectDto } from '@subject/dto/subject.dto';
import { Subject } from '@subject/entities/subject.entity';
import { MediaService } from '@common/media/media.service';
import { ISubjectUpdate } from '@subject/interface/subject.interface';

@Injectable()
export class SubjectService {
  constructor(
    private readonly _subjectRepository: SubjectRepository,
    private readonly _mediaService: MediaService,
  ) {}

  public async createSubject(
    subjectDto: CreateSubjectDto,
    userId: string,
  ): Promise<Subject> {
    const response = await this._subjectRepository.createSubject(
      subjectDto,
      userId,
    );
    const createdSubject = await this._subjectRepository.getSubjectById(
      response.id,
    );
    return createdSubject;
  }

  public async getSubjectById(subjectId: string): Promise<Subject> {
    const response = await this._subjectRepository.getSubjectById(subjectId);
    return response;
  }

  public async updloadSubjectFeatureImg(
    subjectId: string,
    storageBucketName: string,
    file: Express.Multer.File,
  ): Promise<any> {
    await this._subjectRepository.getSubjectById(subjectId);
    const response = await this._mediaService.uploadImage(
      subjectId,
      storageBucketName,
      file,
    );
    await this._subjectRepository.updateSubject(subjectId, {
      feature_img_url: response.publicUrl,
    });
    return response;
  }

  public async updateSubject(
    subjectId: string,
    subjectDto: ISubjectUpdate,
  ): Promise<Subject> {
    const response = await this._subjectRepository.updateSubject(
      subjectId,
      subjectDto,
    );
    return response;
  }

  public async getAllSubjects(): Promise<Subject[]> {
    const response = await this._subjectRepository.getAllSubjects();
    return response;
  }

  public async deleteSubject(subjectId: string): Promise<void> {
    await this._subjectRepository.deleteSubject(subjectId);
  }
}
