import { ApiProperty } from '@nestjs/swagger';
import { CommentEntity } from 'src/comments/entities/comment.entity';
import { LikeEntity } from 'src/likes/entities/like.entity';
import { PhotoEntity } from 'src/photos/entities/photo.entity';

export class PostEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  caption: string;

  @ApiProperty()
  photoId: number;

  @ApiProperty()
  userId: number;

  @ApiProperty({ type: PhotoEntity })
  Photo: PhotoEntity;

  @ApiProperty({ type: [CommentEntity] })
  Comment: CommentEntity[];

  @ApiProperty({ type: [LikeEntity] })
  Like: LikeEntity[];
}
