import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(createAuthDto: CreateAuthDto): Promise<{ access_token: string }> {
    try {
      const user = await this.usersService.findOneByUsername(
        createAuthDto.username,
      );
      if (user?.password !== createAuthDto.password) {
        throw new UnauthorizedException(
          'Nome de usuário ou senha estão incorretos.',
        );
      }
      const payload = { sub: user.id, username: user.username };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      throw new UnauthorizedException(
        'Nome de usuário ou senha estão incorretos.',
      );
    }
  }

  async getUserFromToken(token: string) {
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      console.log(payload);
      const user = await this.usersService.findOne(payload.sub);
      if (!user) {
        throw new UnauthorizedException('Usuário não encontrado');
      }
      return user;
    } catch (err) {
      throw new UnauthorizedException('Token inválido ou expirado');
    }
  }
}
