import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductConfigTable from "./ProductConfigTable";
import SellerInfo from "./SellerInfo";

const ProductDetail = () => {
  const params = useParams();
  const { data: productDetail = [] } = useQuery({
    queryKey: ["products/detail"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products/detail/${params.id}`
      );
      const data = await res.json();
      if (data.success) {
        return data.productDetail;
      } else {
        return;
      }
    },
  });
  console.log(productDetail);
  const { image, model } = productDetail;
  return (
    <section className=" px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        Detail of {model} laptop
      </h5>
      <img className=" mx-auto hover:opacity-20" src={image} alt="" />
      <p className=" text-center text-xl mb-5">Configaration</p>
      <ProductConfigTable productDetail={productDetail}></ProductConfigTable>
      <p className=" text-center text-xl my-5">Seller Information</p>
      <SellerInfo productDetail={productDetail}></SellerInfo>
    </section>
  );
};

export default ProductDetail;
