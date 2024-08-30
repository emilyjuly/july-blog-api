import { ApiProperty } from '@nestjs/swagger';

export class PhotoEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  url: string;
}
