import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spiner from "../shared/spiner/Spiner";
// import ProductCard from "../shared/cards/ProductCard";
import AllProductsCard from "./AllProductsCard";

const AllProducts = () => {
  const params = useParams();
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["/products/catagorys/allProducts/"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products/catagorys/allProducts/${params.id}`
      );
      const data = await res.json();
      if (data.success) {
        return data;
      } else {
        return;
      }
    },
  });
  if (isLoading) {
    return <Spiner></Spiner>;
  }
  console.log(products.products);
  return (
    <section className=" mb-10 px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header className="text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Available Product's
        </h2>
      </header>

      <div className="grid gap-4 mt-8 sm:grid-cols-1 lg:grid-cols-3">
        {products?.products?.map((product) => (
          <>
          <AllProductsCard  key={product._id}
          id={product._id}
          image={product.image}
          title={product.model}
          originalPrice={product.original_price}
          resalePrice = {product.resale_price}
          condition={product.condition}
          ></AllProductsCard>
          {console.log(product)}
        </>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
