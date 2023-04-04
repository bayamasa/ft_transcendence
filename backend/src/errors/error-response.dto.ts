import { HttpException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class NotFoundException extends HttpException {
  constructor() {
    super('Not Found', 404);
  }
}
