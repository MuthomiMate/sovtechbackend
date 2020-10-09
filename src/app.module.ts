import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { JokeResolver } from './app.resolver';
import { JokeNorris } from './app.datasources';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./app.graphql'],
      playground: true,
    }),
  ],
  providers: [JokeNorris, JokeResolver],
})
export class AppModule {}
