import React from "react";
import bannerImage from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <section className="px-4 lg:px-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-4 lg:py-8 text-white">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* BannerImage */}
          <div>
            <img
              className="w-7/12 mx-auto"
              src={bannerImage}
              alt="Banner Image"
            />
          </div>
          {/* BannerContent */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-nav-link">
              Build Your Ultimate Dream Team
            </h1>
            <p className="text-center my-4 text-lg lg:text-xl mg:text-2xl font-medium md:w-7/12 mx-auto">
              Dominate the pitch by building your ultimate dream team, crafting
              winning strategies and leading your squad to unstoppable football
              glory.
            </p>
            <div className="inline-block border-2 border-e-football-pink hover:border-e-football-yellow rounded-full hover:scale-105 transition-all duration-300">
              <button className="px-5 py-3.5 m-2 text-sm md:text-base text-white hover:text-e-football-nav-blue font-bold bg-e-football-pink hover:bg-e-football-yellow rounded-full transition-colors duration-500 cursor-pointer">
                Claim Free GP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
