import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  url;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/users';
  }

  getData() {
    return this.httpClient.get(this.url);
  }

}
