import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { User } from "../users";

@Injectable({
  providedIn: "root"
})
export class DemoService {
  baseURL: string = "https://jsonplaceholder.typicode.com/";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + "users");
  }

  getUsers1() {
    return this.http.get(this.baseURL + "users").pipe(
      map((data: User[]) => {
        return data;
      }),
      catchError(error => {
        return throwError("Something went wrong!");
      })
    );
  }
}
