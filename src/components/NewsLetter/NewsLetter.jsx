import React from "react";
import bannerBg from "../../assets/images/bg-shadow.png";

const NewsLetter = () => {
  return (
    <section className="px-4 lg:px-0">
      <div
        className="max-w-7xl mx-auto px-4 lg:px-0 py-20 rounded-3xl bg-e-football-nav-blue shadow-xl bg-cover bg-center flex items-center justify-center relative -bottom-43"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        {/* NewsLetterContent */}
        <div className="text-center text-white">
          <h2 className="text-xl md:text-3xl font-bold pb-4">
            Subscribe E-Football {new Date().getFullYear()}
          </h2>
          <p className="text-xs md:text-lg lg:text-xl font-medium">
            Get the latest updates and news right in your inbox!
          </p>

          {/* Form */}
          <fieldset className="flex items-center justify-center gap-4 mt-6">
            <input
              type="email"
              className="input rounded-full text-black focus:outline-0 focus:shadow-none focus:border-0"
              placeholder="Enter your email"
              required
            />
            <button className="btn text-e-football-nav-blue hover:text-white bg-e-football-yellow hover:bg-e-football-pink border-none shadow-none transition-colors duration-300 rounded-full font-bold px-7.5 py-4.5">
              Subscribe
            </button>
          </fieldset>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
