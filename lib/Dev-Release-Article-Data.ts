// app/lib/Dev-Release-Article-Data.ts

type Article = {
  slug: string;
  title: string;
  description: string;
};

export const devArticles: Article[] = [
  {
    slug: "dev-release-52",
    title: "Dev Release 1",
    description: "Description for Dev Release 1...",
  },
  {
    slug: "dev-release-2",
    title: "Dev Release 2",
    description: "Description for Dev Release 2...",
  },
  // Add more articles as needed
];

export function getPostData(slug: string): Article | null {
  return devArticles.find((article) => article.slug === slug) || null;
}
