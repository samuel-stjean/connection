
// import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {environment} from '../environments/environment';
// import 'rxjs/add/operator/map';

// @Injectable()
// export class HelloWorldService {

//   constructor(private http: HttpClient) { }

//   getTitle() {
//     return this.http.get(`${environment.serverUrl}/hello-world`)
//   }

// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  private baseUrl = 'http://localhost:9080/users';

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
