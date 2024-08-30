import { ApiProperty } from '@nestjs/swagger';

export class CreateLikeDto {
  @ApiProperty({ required: true })
  userId: number;

  @ApiProperty({ required: true })
  postId: number;
}
