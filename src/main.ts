import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  app.setGlobalPrefix("api");

  app.enableCors({
    origin: "http://localhost:5173",
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle("Auto Parts E-commerce API")
    .setDescription(
      "API documentation for the Auto Parts E-commerce application",
    )
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("docs", app, document, {
    useGlobalPrefix: true,
  });

  const port = Number(process.env.PORT) || 3000;

  await app.listen(port, "0.0.0.0");

  console.log(`Application running on http://localhost:${port}`);
  console.log(`Swagger running on http://localhost:${port}/api/docs`);
}

bootstrap();
