import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ValidateEmailDto {
  @ApiProperty({
    description: 'Email address of the user',
    example: 'email@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
