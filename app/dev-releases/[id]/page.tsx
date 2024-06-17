// app/dev-releases/[id]/page.tsx
"use client";
import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Article, getArticleById } from "@/lib/Dev-Release-Article-Data";
import PageDirection from "@/components/PageDestination/PageDirection";
import ReactMarkdown from "react-markdown";
import image2 from "@/public/images/PageDirection/dev-release-blog-img.png";
import { generateMetadata } from "@/components/GenerateMetadata/GenerateMetadata";
import CustomMarkdown from "@/components/CustomMarkdown/CutomMarkdown";
import Link from "next/link";

const PostPage = () => {
  const { id } = useParams() as { id: string }; // Use useParams to access route parameters
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const fetchedArticle = await getArticleById(id);
        setArticle(fetchedArticle || null);
      } catch (error) {
        console.error("Error fetching article:", error);
        setArticle(null); // Set article to null if there's an error
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  useEffect(() => {
    const generateAndHandleMetadata = async () => {
      if (article) {
        try {
          const metadata = await generateMetadata(article);
          console.log("Generated Metadata:", metadata);
          // Handle metadata as needed, e.g., update document head
        } catch (error) {
          console.error("Error generating metadata:", error);
        }
      }
    };

    generateAndHandleMetadata();
  }, [article]); // Run when article changes

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <main className="w-full">
      <PageDirection
        image={image2}
        title={article.title}
        PagePath="GhostDAG Dev News"
      />
      <div className="container2 flex flex-col md:flex-row">
        <nav className="sticky top-0 max-w-xs w-full md:w-[35%]">
          <ul className="space-y-2 flex flex-col gap-[calc(var(--one)*16)]">
            {article.navigation.map((navItem, index) => (
              <li key={index}>
                <a
                  className="!text-gray-400"
                  href={`#${article.navigation_href[index]}`}
                >
                  {navItem}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-8 flex-1 p_article">
          <CustomMarkdown
            content={article.markdown}
            className="markdown_style"
          />
        </div>
      </div>
    </main>
  );
};

export default PostPage;
