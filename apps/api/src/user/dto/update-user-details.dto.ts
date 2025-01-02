import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDetailsDto {
  @ApiProperty({
    description: "User's full name",
    example: 'John Doe',
  })
  @IsString()
  @IsOptional()
  full_name: string;

  @ApiProperty({
    description: "User's username",
    example: 'johndoe',
  })
  @IsString()
  @IsOptional()
  username: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Profile photo of the case',
  })
  @IsOptional()
  profile_picture: Express.Multer.File;
}
