import React from "react";
import { offer } from "../assets/images";
import Buttons from "../components/Buttons";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <img src={offer} alt="" width={770} height={687} />
      </div>
      <div className="flex-1 felx-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Special
          <span className="text-coral-red"> Offer </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, Quality comfort, and innovation for
          your active life. We provide the best quality for our clients
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, Quality comfort, and innovation for
          your active life. We provide the best quality for our clients
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Buttons label="Shop More" iconURL={arrowRight} />
          <Buttons
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            iconURL={arrowRight}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
