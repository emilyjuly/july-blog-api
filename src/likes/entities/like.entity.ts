import { ApiProperty } from '@nestjs/swagger';

export class LikeEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  postId: number;

  @ApiProperty()
  userId: number;
}
