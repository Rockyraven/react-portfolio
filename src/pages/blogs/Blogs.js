import React from "react";
import { BlogCard } from "../../component";
import "./blog.css";
import { blogs } from "../../db/blog-db";

export const Blogs = () => {
  console.log(blogs);
  return (
    
     <section class="blogs container" id="blogs">
      <h1 class="hero-text text-center">My Blogs</h1>
      {blogs.map((item) => (
        <BlogCard key={item._id} blogName={item.blogName} image={item.image} link={item.link} description={item.description}/>
      ))}
    </section>
  );
};
