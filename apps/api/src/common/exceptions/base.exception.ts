import { HttpException, HttpStatus } from '@nestjs/common';

export class BaseException extends HttpException {
  constructor(message: string, statusCode: number = HttpStatus.BAD_REQUEST) {
    super(message, statusCode);
  }
}
