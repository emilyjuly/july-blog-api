import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from './entities/user.entity';

export const USERNAME_KEY: string = 'username';
export const EMAIL_KEY: string = 'email';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { username, email } = createUserDto;

    const existingUser = await Promise.all([
      this.findOneByUsernameOrEmail(username, USERNAME_KEY),
      this.findOneByUsernameOrEmail(email, EMAIL_KEY),
    ]);

    const [existingUsername, existingEmail] = existingUser;

    if (existingUsername && existingEmail) {
      throw new NotAcceptableException(
        'Já existe um usuário com esse nome de usuário e e-mail.',
      );
    }

    if (existingUsername && !existingEmail) {
      throw new NotAcceptableException(
        'Já existe um usuário com esse nome de usuário.',
      );
    }

    if (existingEmail && !existingUsername) {
      throw new NotAcceptableException('Já existe um usuário com esse e-mail.');
    }

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

  async findOneByUsernameOrEmail(
    data: string,
    key: string,
  ): Promise<UserEntity | false> {
    let userFound: UserEntity | null = null;
    if (key === EMAIL_KEY) {
      userFound = await this.prisma.user.findUnique({ where: { email: data } });
    } else if (key === USERNAME_KEY) {
      userFound = await this.prisma.user.findUnique({
        where: { username: data },
      });
    } else {
      throw new Error('Invalid key provided');
    }

    if (!userFound) {
      return false;
    }

    return userFound;
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
