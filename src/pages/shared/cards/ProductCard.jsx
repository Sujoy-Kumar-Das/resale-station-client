import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import Ratting from "../ratting/Ratting";

const ProductCard = ({ image, description, title, rating, id }) => {
  return (
    <Card>
      <img src={image} alt="" className=" h-52" />
      <Ratting rating={rating}></Ratting>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Link to={`/products/catagorys/allProducts/${id}`}>
        <Button gradientMonochrome="info">View Products</Button>
      </Link>
    </Card>
  );
};

export default ProductCard;
