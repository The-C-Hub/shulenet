import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ValidatePasswordDto } from './validate-password.dto';

export class AuthCredentialsDto extends ValidatePasswordDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @ApiProperty({ example: 'JohnDoe' })
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'example@email.com' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'John Doe' })
  fullName: string;
}
