import React from "react";
import { Post } from "types/post";
import PostItem from "./PostItem";

const PostList = ({ allPosts }: { allPosts: Post[] }) => {
  return (
    <div className="container mx-auto max-w-2xl	md:px-4">
      <ul className="flex flex-col ">
        {allPosts.map((post) => {
          return <PostItem post={post} />;
        })}
      </ul>
    </div>
  );
};

export default PostList;
