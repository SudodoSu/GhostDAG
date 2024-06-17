import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

interface CustomMarkdownProps {
  content: string;
  className?: string;
}

const CustomMarkdown: React.FC<CustomMarkdownProps> = ({
  content,
  className,
}) => {
  return (
    <ReactMarkdown
      className={className}
      rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default CustomMarkdown;
