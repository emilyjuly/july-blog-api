import { ApiProperty } from '@nestjs/swagger';

export class PostEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  caption: string;

  @ApiProperty()
  photoId: number;

  @ApiProperty()
  userId: number;
}
