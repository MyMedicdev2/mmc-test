/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString } from 'class-validator';

export class createUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsString()
  name?: string; // ? is for optional so ts knows its optional
}
