import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Query,
  Req,
  Res,
} from "@nestjs/common";
import { CreateMovieDTO } from "src/dto/create-movie.dto";
import { UpdateMovieDTO } from "src/dto/update-movie.dto";
import { Movie } from "./entities/movie.entity";
import { MoviesService } from "./movies.service";
// Controller - url 을 가져옴, 함수 실행
// @ 데코레이터를 함수나 클래스와 함께사용해 http메서드 구현가능

@Controller("movies")
//안의 인자부분이 url 의 엔트리포인트. 수정가능
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    //요청 응답 처리.
    return this.moviesService.getAll();
  }

  @Get("search")
  search(@Query("year") searchingYear: string) {
    //@Query 를 이용해, url파라미터를 작성도 가능.
    return `We are searcing movie with a title made after: ${searchingYear}`;
  }

  @Get("/:id")
  //url 엔드포인트의 레벨 확인
  getOne(@Param("id") movieId: number): Movie {
    //url로 보낸것은 ,  string
    return this.moviesService.getOne(movieId);
  }
  //   함수에 @데코레이터 파라미터를 넣어 , url 에있는 id라는 파라미터를 가져올수있음.
  // 저장은 id 로.  하겠다 라는 뜻임.

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    //type 를 지정하였음. dto파일로 유효성 검사 가능.

    //@Body() 로 리퀘스트의 body 가져옴
    return this.moviesService.create(movieData);
  }

  @Delete("/:id")
  remove(@Param("id") movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch("/:id")
  update(@Param("id") movieId: number, @Body() updateData: UpdateMovieDTO) {
    return this.moviesService.update(movieId, updateData);
  }
}
