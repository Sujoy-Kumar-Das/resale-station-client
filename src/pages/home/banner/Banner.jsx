import React from "react";
import bgImage from "../../../../public/laptopBG-image.jpg";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section
      className=" text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-[85vh] lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-purple-600  to-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Wellcome to Resale Station
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            We provide fresh condition second hand laptop's
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link>
              <Button gradientDuoTone="purpleToBlue">Take a tour</Button>
            </Link>
            <Link>
              <Button gradientDuoTone="cyanToBlue">Learn more</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
