import type { MDXComponents } from "mdx/types";
import type { PropsWithChildren } from "react";

const Pre = ({ children }: PropsWithChildren) => {
  return <pre>{children}</pre>;
};

const customComponents = {
  pre: Pre,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customComponents,
  };
}
