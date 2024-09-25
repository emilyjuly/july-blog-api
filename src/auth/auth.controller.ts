import {
  Body,
  Controller,
  Get,
  Post,
  Headers,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Public } from 'src/decorators/public.decorator';

@ApiBearerAuth()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.login(createAuthDto);
  }

  @Public()
  @Get('validate-token')
  async getUserFromToken(@Headers('Authorization') authHeader: string) {
    const token = authHeader?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token não fornecido');
    }
    return this.authService.getUserFromToken(token);
  }
}
