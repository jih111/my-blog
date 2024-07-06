import Image from "next/image";
import { format } from "date-fns";
import { Post } from "types/post";

const PostItem = ({ post }: { post: Post }) => {
  return (
    <li className="py-5">
      <a href={`posts/${post.slug}`} className="flex ">
        <div className="flex-1">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p className="text-base my-2.5 text-zinc-600">{post.desc}</p>
          <span className="text-sm">{format(post.date, "yyyy-MM-dd")}</span>
        </div>
        <div className="m-3.5 w-fit	h-fit rounded-xl	overflow-hidden">
          <Image
            src={post.thumbnail}
            width={130}
            height={90}
            alt="react post"
          />
        </div>
      </a>
    </li>
  );
};

export default PostItem;
