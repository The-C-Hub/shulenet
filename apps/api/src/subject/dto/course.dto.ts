import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty({
    description: 'Title of the subject',
    example: 'Getting Started With Calculus',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Overview of the subject',
    example: 'This subject is an introduction to calculus',
  })
  @IsNotEmpty()
  @IsString()
  overview: string;

  @ApiProperty({
    description: 'SubjectId of the subject',
    example: 'https://www.google.com',
  })
  @IsUUID()
  @IsNotEmpty()
  subject_id: string;
}
