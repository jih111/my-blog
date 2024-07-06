import Link from "next/link";
import { MDXComponents } from "mdx/types";

export const MdxComponents: MDXComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...props} href={props.href || ""}>
        {children}
      </Link>
    );
  },
  code: ({ children, ...props }) => {
    return (
      <code {...props} className="bg-slate-200	text-orange-600	">
        {children}
      </code>
    );
  },
};
