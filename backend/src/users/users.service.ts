import { Injectable } from '@nestjs/common';
import { PrismaClient, Users } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User as UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user: Users = await this.prisma.users.create({
      data: createUserDto,
    });
    return this.toEntity(user);
  }

  async findAll(): Promise<UserEntity[]> {
    const users: Users[] = await this.prisma.users.findMany();
    return users.map((user) => this.toEntity(user));
  }

  async findOne(id: number): Promise<UserEntity | null> {
    const user: Users = await this.prisma.users.findUnique({ where: { id } });
    if (user) {
      return this.toEntity(user);
    }
    return null;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<Users> {
    return this.prisma.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  private toEntity(user: Users): UserEntity {
    const userEntity = new UserEntity();
    userEntity.id = user.id;
    userEntity.ftUsername = user.ftUsername;
    userEntity.nickname = user.nickname;
    userEntity.avatar = user.avatar;
    return userEntity;
  }
}
