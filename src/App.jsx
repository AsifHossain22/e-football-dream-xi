import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Players from "./components/Players/Players";

const App = () => {
  return (
    <>
      {/* Header*/}
      <Header />

      {/* Main */}
      <main>
        {/* BannerSection */}
        <Banner />

        {/* Players */}
        <Players />
      </main>
    </>
  );
};

export default App;
