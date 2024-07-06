import PostList from "components/PostList";
import { getPostList } from "lib/posts";

const Root = async () => {
  const allPosts = await getPostList();

  return <PostList allPosts={allPosts} />;
};

export default Root;
