import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, Matches } from 'class-validator';

export class ValidatePasswordDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: 'Your Password Is Too Weak',
  })
  @ApiProperty({ example: 'password$123' })
  password: string;
}
