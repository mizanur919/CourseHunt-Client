import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="text-slate-800 bg-neutral-100 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium">
              The World’s Leading
              <br className="hidden lg:inline-block" />
              Distance Learning Provider
            </h1>
            <p className="text-gray-500 mb-8 text-xl leading-relaxed">
              Flexible easy to access learning opportunities can bring a significant change in how individuals prefer to learn! The Ellen can offer you to enjoy the beauty of eLearning!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 transition-color duration-700 rounded-none text-lg">
                Join For Free
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/01/banner-img5.png"
            />
          </div>
          <div className="absolute top-10 left-16 w-28">
            <img src="https://themes.envytheme.com/ellen/wp-content/uploads/2021/11/shape2.png" alt="Line Shape" />
          </div>
          <div className="absolute top-32 left-1/3">
            <img src="https://themes.envytheme.com/ellen/wp-content/uploads/2021/11/shape4.png" alt="Leaf Shape" />
          </div>
          <div className="absolute top-24 left-1/2 w-80">
            <img src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/01/shape11.png" alt="Pen Shape" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
