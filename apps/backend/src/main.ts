// import { NestFactory } from '@nestjs/core'
// import { AppModule } from './app.module'

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule)
//   app.enableShutdownHooks()
//   await app.listen(3000)
// }
// bootstrap()
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('DQ Weapons API')
    .setDescription('The DQ Weapons API description')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
