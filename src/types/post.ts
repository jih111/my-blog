import { CompileMDXResult } from "next-mdx-remote/rsc";

export type Post = {
  title: string;
  date: Date;
  desc: string;
  thumbnail: string;
  slug: string;
  content: CompileMDXResult["content"];
};
