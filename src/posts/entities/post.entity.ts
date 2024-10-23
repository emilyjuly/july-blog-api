import { ApiProperty } from '@nestjs/swagger';

export class PhotoEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  filename: string;

  @ApiProperty()
  mimetype: string;

  @ApiProperty()
  size: number;
}

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
}
