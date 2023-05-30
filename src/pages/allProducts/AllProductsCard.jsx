import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";


const AllProductsCard = ({ image, title,originalPrice,resalePrice,condition,  id }) => {
  return (
    <Card>
      <img src={image} alt="" className=" h-52" />
     
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Condition:{condition}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Original Price:${originalPrice}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Resell Price:${resalePrice}
      </p>
      <Link to={`/products/catagorys/allProducts/${id}`}>
        <Button gradientMonochrome="info">Details</Button>
      </Link>
    </Card>
  );
};

export default AllProductsCard;