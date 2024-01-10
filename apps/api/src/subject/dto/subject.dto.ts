import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSubjectDto {
  @ApiProperty({
    description: 'Title of the subject',
    example: 'Mathematics',
  })
  @IsString()
  @IsNotEmpty()
  readonly title: string;
}
