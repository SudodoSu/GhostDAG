import PagePath from "@/components/PageDestination/PagePath";
import AboutProduct from "@/components/Products/AboutProduct/AboutProduct";
import Products from "@/components/Products/Products";
import X1 from "@/components/Products/x1/x1";

function page() {
  return (
    <main>
      <PagePath pagePath="GhostDAG Payment Card" />
      <X1 />
      <AboutProduct />
      <Products />
    </main>
  );
}

export default page;
