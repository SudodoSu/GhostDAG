import ProductsSlider from "./ProductsSlider";

function Products() {
  return (
    <section className="w-full pt-10">
      <div className="container2">
        <h1 className="text-center text-[calc(var(--one)*90)] tracking-[calc(var(--one)*-1.8)] mb-[calc(var(--one)*56)] leading-[110%] font-[800]">
          GhostDAG Products
        </h1>
        <div>
          <ProductsSlider />
        </div>
      </div>
    </section>
  );
}

export default Products;
