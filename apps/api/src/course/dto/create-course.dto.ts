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
    description: 'Id of the subject',
    example: 'efb5c6a0-3a9d-4a1a-8f5a-0fbd8b6c8f8e',
  })
  @IsUUID()
  @IsNotEmpty()
  subject: string;
}
