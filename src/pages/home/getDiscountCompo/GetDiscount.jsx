import { Button, Card } from "flowbite-react";
import React from "react";
import discountImg from "../../../assets/dicountImg.jpg";
const GetDiscount = () => {
  return (
    <section className=" w-full lg:w-4/5 mx-auto">
      <h3 className=" text-center text-3xl font-bold mb-10">
        Special Discount Offer
      </h3>
      <div className=" lg:flex w-full  mx-auto bg-slate-100">
        <div className="w-full lg:w-1/2">
          <img className=" w-full lg:w-80" src={discountImg} alt="" />
        </div>
        <div className="  mt-32">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Get 20% Off all product's today
          </h5>
          <Button className=" mt-3">Get Discount</Button>
        </div>
      </div>
    </section>
  );
};

export default GetDiscount;
