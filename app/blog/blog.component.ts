import { Component, OnInit } from "@angular/core";
import { Post } from "../shared/domain/post.interface";

@Component({
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"]
})
export class BlogComponent implements OnInit {

  public posts: Post[] = [];

  ngOnInit() {

    this.posts = [
      {
        postId: 1,
        title: "Lorem ipsum dolor sit amet",
        posted: new Date(),
        author: "Dick",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
        body: "",
        featuredImageUrl: "assets/images/img_1.jpg"
      },
      {
        postId: 2,
        title: "Lorem ipsum dolor sit amet",
        posted: new Date(),
        author: "Dick",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
        body: "",
        featuredImageUrl: "assets/images/img_2.jpg"
      },
      {
        postId: 3,
        title: "Lorem ipsum dolor sit amet",
        posted: new Date(),
        author: "Dick",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
        body: "",
        featuredImageUrl: "assets/images/img_3.jpg"
      },
      {
        postId: 4,
        title: "Lorem ipsum dolor sit amet",
        posted: new Date(),
        author: "Dick",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
        body: "",
        featuredImageUrl: "assets/images/img_4.jpg"
      },
      {
        postId: 5,
        title: "Lorem ipsum dolor sit amet",
        posted: new Date(),
        author: "Dick",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
        body: "",
        featuredImageUrl: "assets/images/img_5.jpg"
      },
      {
        postId: 6,
        title: "Lorem ipsum dolor sit amet",
        posted: new Date(),
        author: "Dick",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
        body: "",
        featuredImageUrl: "assets/images/img_6.jpg"
      }
    ];
  }
}
