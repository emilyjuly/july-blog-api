import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

type User = {
  id: number;
  email: string;
  username: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users.map(
      ({ password, ...userWithoutPassword }) => userWithoutPassword,
    );
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new Error('User not found');
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async findOneByUsername(username: string) {
    const user = await this.prisma.user.findUnique({ where: { username } });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
