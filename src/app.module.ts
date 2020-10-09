import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { JokeResolver } from './app.resolver';
import { JokeNorris } from './app.datasources';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./app.graphql'],
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, JokeNorris, JokeResolver],
})
export class AppModule {}
