import PageDirection from "@/components/PageDestination/PageDirection";
import { getPostData } from "@/lib/Dev-Release-Article-Data";
import image1 from "@/public/images/PageDirection/dev-release-blog-img.png";

type Article = {
  slug: string;
  title: string;
  description: string;
};

type Props = {
  article: Article | null;
};

export const DevReleasePage: React.FC<Props> = ({ article }) => {
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <main>
      <PageDirection
        image={image1}
        title={article.title}
        PagePath="GhostDAG Dev News"
      />
      <div className="container2 mt-[calc(var(--one)*12)]">
        <h2 className="!text-[calc(var(--one)*20)] mb-5">{article.title}</h2>
        <p className="text-left">{article.description}</p>
      </div>
    </main>
  );
};
