//class 임
// 데이터를 오브젝트로 변환하는 객체
// 어떠한 값이 어떤 타입을 가지고 이 값이 필수인지 옵션인지 정의하기위한 파일

// import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDTO } from "./create-movie.dto";

 export class UpdateMovieDTO  {
 }


// export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {
//   //basetype 가 필요함. 인자
//   //partial type
//   //npm i @nestjs/mapped-types
//   //타입을 변환시키고 사용할수있게하는 패키지
// }
