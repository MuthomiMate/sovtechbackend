import { Injectable } from '@nestjs/common';
import { RESTDataSource } from 'apollo-datasource-rest';

@Injectable()
export class JokeNorris extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/jokes';
  }

  async getAllCategories() {
    const res = await this.get('categories');
    return res;
  }

  async getRandomJoke({ category }) {
    const response = await this.get('random', { category: category });
    return response;
  }
}
