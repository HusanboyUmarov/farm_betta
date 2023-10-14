import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
// import * as cookieParser from 'cookie-parser'

const start = async()=>{
try {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix('api')

  const config = new DocumentBuilder()
  .setTitle('Ferma')
  .setDescription('Ferma company')
  .setVersion('1.0.0')
  .addTag('NodeJs, NestJs, MongoDB, JWT, Swagger')
  .build();
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)
  // app.use(cookieParser())
  await app.listen(3000, ()=>{
    console.log(`server is running on ${3000} port`)
  });
  
} catch (error) {
  console.log(error);
  
}

}
start()
