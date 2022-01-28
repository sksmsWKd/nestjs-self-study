import { Module } from "@nestjs/common";
import { MoviesController } from "./movies.controller";
import { MoviesService } from "./movies.service";

@Module({
  imports: [MoviesModule],
  //app모듈이 movie 모듈을 import
  controllers: [MoviesController],
  providers: [MoviesService],
})
//의존성 주입
export class MoviesModule {}
