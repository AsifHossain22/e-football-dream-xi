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
              className="w-6/12 mx-auto invert"
              src={bannerImage}
              alt="Banner Image"
            />
          </div>
          {/* BannerContent */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-nav-link">
              Choose Your Ultimate
              <br /> Dream E-Football Players
            </h1>
            <p className="text-center my-4 text-xl mg:text-2xl font-medium">
              Beyond Boundaries Beyond Limits
            </p>
            <div className="inline-block border-2 border-btn-primary hover:border-[#E5BE71] rounded-2xl transition-colors duration-300">
              <button className="px-5 py-3.5 m-2 text-sm md:text-base bg-btn-primary text-nav-link font-bold bg-linear-to-r hover:from-[#DB7D99] hover:via-[#E3A65F] hover:to-[#E5BE71] rounded-xl transition-colors duration-500 cursor-pointer">
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
