import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TwDevServerService {
  version = {};
  filesTree = {};

  constructor(
    private http: HttpClient
  ) {
    this.startService();
  }

  startService(){
  }

  sendCode(url, method, body){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    if(method === 'GET'){
      return this.http.get(url);
    }else if(method === 'POST'){
      return this.http.post(url, body, {headers});
    }else if(method === 'PUT'){
      return this.http.put(url, body, {headers});
    }else if(method === 'DELETE'){
      return this.http.delete(url);
    }
  }
}

