import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LessonDto {
  @ApiProperty({
    description: 'The title of the lesson',
    example: 'Introduction to NestJS',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The description of the lesson',
    example: 'Introduction to NestJS',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}
