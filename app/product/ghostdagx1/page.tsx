import PagePath from "@/components/PageDestination/PagePath";
import AboutProduct from "@/components/Products/AboutProduct/AboutProduct";
import Products from "@/components/Products/Products";
import X1 from "@/components/Products/x1/x1";
import { AllProductsAboutData } from "@/lib/products/allAboutData";

function page() {
  return (
    <main>
      <PagePath pagePath="GhostDAG X1" />
      <X1 />
      <AboutProduct data={AllProductsAboutData.x1} />
      <Products />
    </main>
  );
}

export default page;
