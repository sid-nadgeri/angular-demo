import { Component, OnInit } from "@angular/core";

import { posts } from "../posts";
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
  posts = posts;
  comments = comments;
  filteredPosts: any;
  filteredComments: any;
  constructor(private demoService: DemoService) {}

  ngOnInit() {
    this.users = this.demoService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  share() {
    window.alert("The product has been shared!");
  }

  showUserPosts(userId: number) {
    this.filteredPosts = posts.filter(p => userId == p.userId);
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
