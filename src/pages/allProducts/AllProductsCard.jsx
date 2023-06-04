import { Button, Card } from "flowbite-react";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import BuyNowModal from "../productDetail/BuyNowModal";

const AllProductsCard = ({
  image,
  title,
  originalPrice,
  resalePrice,
  condition,
  id,
  productDetail
  
}) => {
  return (
    <Card>
      <PhotoProvider>
        <PhotoView src={image}>
          <img src={image} alt="" className=" h-52" />
        </PhotoView>
      </PhotoProvider>

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
      <div className=" flex">
        <Link className=" me-5" to={`/products/detail/${id}`}>
          <Button gradientMonochrome="info">Details</Button>
        </Link>
        <BuyNowModal productDetail={productDetail} ></BuyNowModal>
      </div>
    </Card>
  );
};

export default AllProductsCard;
