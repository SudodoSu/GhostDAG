// app/posts/[id]/NotFound.tsx
const NotFound = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center mt-[calc(var(--one)*250)]">
      <h1 className="text-[calc(var(--one)*40)] font-bold text-center">
        404 - Page Not Found
      </h1>
      <p>
        The page you are looking for does not exist. Please check the URL or go
        back to the home page.
      </p>
    </main>
  );
};

export default NotFound;
