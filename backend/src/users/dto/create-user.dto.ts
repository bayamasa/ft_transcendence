import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  ftUsername: string;

  @IsString()
  @IsNotEmpty()
  nickname: string;

  @IsOptional()
  avatar: Buffer;
}
