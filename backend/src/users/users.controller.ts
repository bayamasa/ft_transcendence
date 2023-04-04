import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { Users } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User as UserEntity } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: '全ユーザーの情報を返します' })
  @ApiOkResponse({description: '成功時のレスポンス',type: [UserEntity]})
  @ApiInternalServerErrorResponse({ description: '失敗時のレスポンス' })
  findAll(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '指定したユーザーの情報を返します' })
  @ApiOkResponse({ description: '成功時のレスポンス', type: UserEntity })
  @ApiNotFoundResponse({description: 'ユーザーが見つからない場合のレスポンス'})
  async findOne(@Param('id') id: string): Promise<UserEntity> {
    const user = await this.usersService.findOne(+id);

    if (user === null) {
      // TODO: loggingする
      console.log('not found');
      throw new NotFoundException();
    }
    return user;
  }

  @Post()
  @ApiOperation({ summary: 'ユーザーを作成します' })
  @ApiCreatedResponse({ description: '成功時のレスポンス', type: UserEntity })
  @ApiInternalServerErrorResponse({ description: '失敗時のレスポンス' })
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'ユーザーを更新します' })
  @ApiOkResponse({ description: '成功時のレスポンス', type: UserEntity })
  @ApiNotFoundResponse({description: 'ユーザーが見つからない場合のレスポンス'})
  @ApiInternalServerErrorResponse({ description: '失敗時のレスポンス' })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<Users> {
    const user = await this.usersService.update(+id, updateUserDto);
    
    if (user === null) {
      throw new NotFoundException();
    } 
    return user;
  }

}
