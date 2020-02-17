import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReadjsonfileService  {
  constructor(private http: HttpClient) { }

  getConfigfromjson(filepath) {
    // now returns an Observable of Config
    return this.http.get(filepath);
  }

}