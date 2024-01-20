import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    /* Config */
    words: ["SASS", "BTC", "BTB"],
    loop: {},
    typeSpeed: 120,
  });
  return (
    <div className="text-black">
      <div className="max-w-[800px] w-full h-[80vh] mx-auto text-center flex flex-col justify-center">
        <p className="text-primary font-bold p-2">
          GROWING WITH FINANCIAL KNOWLEDGE
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          Grow with PMS
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-1 text-primary">
            {text}
          </p>
          <span className="md:text-5xl sm:text-4xl text-xl font-bold text-primary">
            <Cursor cursorStyle="|" />
          </span>

          {/* <Typewriter
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            onInit={(typewriter) => {
              typewriter
                .typeString("BTB")
                .pauseFor(1000)
                .deleteAll()
                .typeString("BTC")
                .pauseFor(1000)
                .deleteAll()
                .typeString("SASS")
                .start();
            }}
          /> */}
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 ">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
