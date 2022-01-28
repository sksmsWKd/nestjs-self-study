import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  app.useGlobalPipes(
    //쓰고싶은 파이프를 app에게
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      //리퀘스트 자체를 막음.

      transform: true,
      //유저들이 보낸데이터를 우리가 원하는데이터로 변환.
      //지정한 데이터타입으로 바꿔줌.
    }),
    //유효성을 검사해줌.
    //whitelist도 설정 가능.
  );
}
bootstrap();
