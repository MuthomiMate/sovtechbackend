import { Resolver, Query } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { JokeNorris } from './app.datasources';

@Resolver('joke')
@Injectable()
export class JokeResolver {
  constructor(private readonly jokeNorris: JokeNorris) {}

  @Query('getRandomJoke')
  async getRandomJoke() {
    return await this.jokeNorris.getRandomJoke();
  }

  @Query('getCategories')
  async getCategories() {
    return await this.jokeNorris.getAllCategories();
  }
}
