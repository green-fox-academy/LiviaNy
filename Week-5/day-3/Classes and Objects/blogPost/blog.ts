// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost

import { BlogPost } from "./blogPost";
import { blogPost1, blogPost2, blogPost3 } from "./blogPost";
class Blog {
  listOfBlogPosts: BlogPost[];

  constructor(newBlogPost: BlogPost[]) {
    this.listOfBlogPosts = newBlogPost;
  }

  delete(int: number) {
    if (int < 0) {
      console.log(`Please give a positive integer`);
    } else if (int > this.listOfBlogPosts.length) {
      console.log(
        `PLease give a number between 0 and ` +
          (this.listOfBlogPosts.length - 1)
      );
    } else {
      int = int - 1;
      this.listOfBlogPosts.splice(int, 1);
    }
  }

  update(int: number, BlogPost: BlogPost): void {
    this.listOfBlogPosts.splice(int - 1, 1, BlogPost);
  }
}

let newBlog = new Blog([blogPost1, blogPost2, blogPost3]);
newBlog.delete(1);
newBlog.update(
  3,
  new BlogPost(
    `Tester`,
    `The great testing`,
    `This is a test. Please do work!`,
    `2021.01.15.`,
  )
);
console.log(newBlog);
