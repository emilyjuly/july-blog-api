import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: false })
  username: string;

  @ApiProperty({ required: false })
  password: string;

  @ApiProperty({ required: false, default: Role.USER })
  role: Role;
}
