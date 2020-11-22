import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Comments } from "../comments";
import { Posts } from "../posts";
import { User } from "../users";

@Injectable({
  providedIn: "root"
})
export class DemoService {
  baseURL: string = "https://jsonplaceholder.typicode.com/";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get(this.baseURL + "users").pipe(
      map((data: User[]) => {
        return data;
      }),
      catchError(error => {
        return throwError("Something went wrong in fetching users details!");
      })
    );
  }
  getPosts(id: number): Observable<Posts[]> {
    return this.http.get(this.baseURL + "posts?userId=" + id).pipe(
      map((data: Posts[]) => {
        return data;
      }),
      catchError(error => {
        return throwError("Something went wrong in fetching posts!");
      })
    );
  }
  getComments(postId: number): Observable<Comments[]> {
    return this.http.get(this.baseURL + "comments?postId=" + postId).pipe(
      map((data: Comments[]) => {
        return data;
      }),
      catchError(error => {
        return throwError("Something went wrong in fetching comments!");
      })
    );
  }
}
