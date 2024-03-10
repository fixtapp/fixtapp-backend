import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const { appPort, appPrefix, appHostServer } = configService.get('app');

  app.setGlobalPrefix(appPrefix);
  app.enableCors();

  await app.listen(appPort || '4200');
  console.log(`Server running on ${appHostServer}/${appPrefix}`);
}
bootstrap();
