import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from '@subject/entities/subject.entity';
import { Repository } from 'typeorm';
import { BaseException } from '@common/exceptions/base.exception';
import { CreateSubjectDto } from '@subject/dto/subject.dto';
import { ISubjectUpdate } from '@subject/interface/subject.interface';

@Injectable()
export class SubjectRepository {
  constructor(
    @InjectRepository(Subject)
    private readonly _subjectRepository: Repository<Subject>,
  ) {}

  public async createSubject(
    subjectDto: CreateSubjectDto,
    userId: string,
  ): Promise<Subject> {
    try {
      const createdSubject = this._subjectRepository.create({
        ...subjectDto,
        creator: { id: userId },
      });
      const newSubject = await this._subjectRepository.save(createdSubject);
      return newSubject;
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async updateSubject(
    subjectId: string,
    subjectDto: Partial<ISubjectUpdate>,
  ): Promise<Subject> {
    try {
      const updatedSubject = await this._subjectRepository.preload({
        id: subjectId,
        ...subjectDto,
        feature_image_url: subjectDto.feature_img_url,
      });
      const newSubject = await this._subjectRepository.save(updatedSubject);
      return newSubject;
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async getAllSubjects(): Promise<Subject[]> {
    try {
      const subjects = await this._subjectRepository.find({
        relations: ['creator'],
      });
      return subjects;
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async getSubjectById(subjectId: string): Promise<Subject> {
    try {
      const subject = await this._subjectRepository.findOneOrFail({
        where: {
          id: subjectId,
        },
        relations: ['creator'],
      });
      return subject;
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async deleteSubject(subjectId: string): Promise<void> {
    try {
      await this._subjectRepository.delete(subjectId);
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }
}
