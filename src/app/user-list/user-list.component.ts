import { Component, OnInit } from "@angular/core";

import { Posts } from "../posts";
import { comments } from "../comments";
import { DemoService } from "../services/demo.service";
import { User } from "../users";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  users: User[];
  firstName: string;
  posts: Posts[];
  comments = comments;
  filteredPosts: any;
  filteredComments: any;
  private loading: boolean = false;
  constructor(private demoService: DemoService) {}

  ngOnInit() {
    this.demoService.getUsers().subscribe(data => {
      this.users = data;
      this.loading = false;
    });
  }
  share() {
    window.alert("The product has been shared!");
  }

  showUserPosts(id: number) {
    //this.filteredPosts = posts.filter(p => userId == p.userId);
    this.demoService.getPosts(id).subscribe(data => {
      this.posts = data;
      this.loading = false;
    });
    this.filteredComments = null;
  }

  showPostComments(postId: number) {
    console.log(postId);
    this.filteredComments = comments.filter(c => postId == c.id);
    console.log(this.filteredComments);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
