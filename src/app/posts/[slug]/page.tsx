import React from "react";
import { getPostBySlug, getPostPaths } from "lib/posts";
import PostDetail from "components/PostDetail";

const post = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostBySlug(params.slug);

  return <PostDetail post={post} />;
};

export default post;

export function generateStaticParams() {
  const postPaths: string[] = getPostPaths();
  return postPaths;
}
