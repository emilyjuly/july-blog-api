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

  @ApiProperty()
  path: string;
}
