import React from "react";

import { Post } from "types/post";

const PostDetail = ({ post }: { post: Post }) => {
  return (
    <div className="prose mx-auto w-full max-w-[750px] px-5 dark:prose-invert sm:px-6">
      {post.content}
    </div>
  );
};

export default PostDetail;
