import React from "react";
import { FaStar } from "react-icons/fa";
const Ratting = ({ rating }) => {
  return (
    <>
      {rating === 5 ? (
        <div className=" flex text-yellow-200 text-xl">
          <p className=" me-1">
            <FaStar />
          </p>
          <p className=" me-1">
            <FaStar />
          </p>
          <p className=" me-1">
            <FaStar />
          </p>
          <p className=" me-1">
            <FaStar />
          </p>
          <p className=" me-1">
            <FaStar />
          </p>
        </div>
      ) : rating === 4 ? (
        <div className=" flex text-yellow-200 text-xl">
          <p className=" me-1">
            <FaStar />
          </p>
          <p className=" me-1">
            <FaStar />
          </p>
          <p className=" me-1">
            <FaStar />
          </p>
          <p className=" me-1">
            <FaStar />
          </p>
        </div>
      ) : rating === 3 ? (
        <div className=" flex text-yellow-200 text-xl">
          <p className=" me-1">
            <FaStar />
          </p>
          <p className=" me-1">
            <FaStar />
          </p>
          <p className=" me-1">
            <FaStar />
          </p>
        </div>
      ) : rating === 2 ? (
        <div className=" flex text-yellow-200 text-xl">
          <p className=" me-1">
            <FaStar />
          </p>
          <p className=" me-1">
            <FaStar />
          </p>
        </div>
      ) : rating === 1 ? (
        <div className=" flex text-yellow-200 text-xl">
          <p className=" me-1">
            <FaStar />
          </p>
        </div>
      ):""}
    </>
  );
};

export default Ratting;
