import { Component, OnInit } from "@angular/core";

import { Posts } from "../posts";
import { Comments } from "../comments";
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
  comments: Comments[];
  filteredComments: any;
  // TODO - Add loader to show server behaviour.
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
    this.demoService.getPosts(id).subscribe(data => {
      this.posts = data;
      this.loading = false;
    });
    this.filteredComments = null;
  }

  showPostComments(postId: number) {
    this.demoService.getComments(postId).subscribe(data => {
      this.comments = data;
    });
  }
}
