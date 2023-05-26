import React from "react";
import { useQuery } from "react-query";
import Spiner from "../../shared/spiner/Spiner";
import ProductCard from "../../shared/cards/PorductCard";
import { Button } from "flowbite-react";

import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
const Products = () => {
  let limit = 3;
  const {
    isLoading,
    refetch,
    data: products = [],
  } = useQuery({
    queryKey: ["products/catagorys"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products/catagorys?view=${limit}`
      );
      const data = await res.json();
      console.log(data);
      if (data.success) {
        return data;
      }
    },
  });
  const handleViewAllProducts = () => {
    limit = 6;

    refetch();
  };
  if (isLoading) {
    return <Spiner></Spiner>;
  }
  return (
    <section>
      <div className=" px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Available Brand's Collection's
          </h2>
        </header>

        <div className="grid gap-4 mt-8 sm:grid-cols-1 lg:grid-cols-3">
          {products?.productsCatagory.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              image={product.image}
              title={product.title}
              description={product.description}
              rating={product.rating}
            ></ProductCard>
          ))}
        </div>

        <div className=" flex justify-center mt-10">
          <Button
            className={`${
              products?.productsCatagory.length === products?.count && "hidden"
            }`}
            onClick={handleViewAllProducts}
            gradientMonochrome="info"
          >
            Show all{" "}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
