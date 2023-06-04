import { Button } from "flowbite-react";
import React from "react";
import { useQuery } from "react-query";
import Spiner from "../shared/spiner/Spiner";
import ProductCard from "../shared/cards/ProductCard";

const AllProductsCatagorys = () => {
  const { isLoading,data: products = [] } = useQuery({
    queryKey: ["products/catagorys"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products/catagorys");
      const data = await res.json();

      if (data.success) {
        return data;
      }
    },
  });
  if(isLoading){
    return <Spiner></Spiner>
  }
  return (
    <section className=" mb-10 px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header className="text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Available Brand's Collection's
        </h2>
      </header>

      <div className="grid gap-4 mt-8 sm:grid-cols-1 lg:grid-cols-3">
        {products?.productsCatagory?.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            image={product.image}
            title={product.title}
            description={product.description}
            rating={product.rating}
            product={product}
          ></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default AllProductsCatagorys;
