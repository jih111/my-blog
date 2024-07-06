import fs from "fs";
import path from "path";
import { Post } from "types/post";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
// @ts-expect-error no types
import a11yEmoji from "@fec/remark-a11y-emoji";
import { MdxComponents } from "components/Mdx";

const BASE_PATH = "/src/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getPostPaths = () => {
  const path: string[] = fs.readdirSync(POSTS_PATH);
  return path;
};

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const postPath = path.join(POSTS_PATH, `${realSlug}.mdx`);
  const source = fs.readFileSync(postPath, "utf8");

  const { frontmatter, content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [
          // 깃허브 Flavored 마크다운 지원 추가 (version downgrade)
          remarkGfm,
          // 이모티콘 접근성 향상
          a11yEmoji,
          // mdx 1줄 개행 지원
          remarkBreaks,
        ],
        rehypePlugins: [
          // pretty code block
          rehypePrettyCode,
        ],
      },
      parseFrontmatter: true,
    },
    components: { MdxComponents },
  });
  return { ...frontmatter, slug: realSlug, content } as Post;
};

export const getPostList = async (): Promise<Post[]> => {
  const postPaths = getPostPaths();
  const postList = await Promise.all(
    postPaths.map((postPath) => getPostBySlug(postPath))
  );
  return postList;
};
