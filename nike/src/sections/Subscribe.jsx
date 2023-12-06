import React from "react";
import Buttons from "../components/Buttons";

const Subscribe = () => {
  return (
    <section
      className="flex max-container max-lg:flex-col gap-10 items-center justify-between"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] font-bold font-pa">
        Sign Up from <span className="text-coral-red">Udates</span> & Newsletter
      </h3>
      <div>
        <input type="text" placeholder="subscribe " className="input" />
        <div>
          <Buttons label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
