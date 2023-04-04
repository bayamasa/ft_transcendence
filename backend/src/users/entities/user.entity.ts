import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ftUsername: string;

  @ApiProperty()
  nickname: string;

  @ApiProperty()
  avatar?: Buffer;
}
