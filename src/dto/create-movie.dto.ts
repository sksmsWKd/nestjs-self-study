//class 임
// 데이터를 오브젝트로 변환하는 객체
// 어떠한 값이 어떤 타입을 가지고 이 값이 필수인지 옵션인지 정의하기위한 파일

import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: true })
  //모든요소를 하나씩 검사.
  @IsOptional()
  readonly genres: string[];
}
