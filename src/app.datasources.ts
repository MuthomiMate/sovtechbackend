import { Injectable } from '@nestjs/common';
const { RESTDataSource } = require('apollo-datasource-rest');

@Injectable()
class JokeNorris extends RESTDataSource {
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

module.exports = { JokeNorris };
