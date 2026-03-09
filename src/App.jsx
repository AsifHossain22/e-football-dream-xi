import React, { Suspense, useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Loader from "./components/Loader/Loader";

const fetchPlayer = async () => {
  const res = await fetch("/playersData.json");
  return res.json();
};
// PlayersPromise
const playersPromise = fetchPlayer();

const App = () => {
  // ToggleState
  const [toggle, setToggle] = useState(true);

  // CoinState
  const [availableCoin, setAvailableCoin] = useState(10000000000);

  return (
    <>
      {/* Header*/}
      <Header availableCoin={availableCoin} />

      {/* Main */}
      <main>
        {/* BannerSection */}
        <Banner />

        {/*  */}

        {/* SectionTitleAndButton */}
        <div
          id="features"
          className="max-w-7xl mx-auto px-4 lg:px-0 flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 items-center mt-20"
        >
          <h2
            className={`font-sora font-bold text-xl md:text-[28px] lg:text-4xl text-e-football-yellow`}
          >
            Featured Players
          </h2>
          <div className="">
            <button
              onClick={() => setToggle(true)}
              className={`btn ${toggle === true ? "bg-e-football-pink" : "bg-e-football-nav-blue"} px-5 py-6 text-base text-white border-5 border-r-0 border-white rounded-l-full`}
            >
              Available
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`btn ${toggle === false ? "bg-e-football-pink" : "bg-e-football-nav-blue"} px-5 py-6 text-base text-white border-5 border-l-0 border-white rounded-r-full`}
            >
              Selected (0)
            </button>
          </div>
        </div>

        {/* Players */}
        {toggle === true ? (
          <Suspense fallback={<Loader />}>
            <AvailablePlayers
              availableCoin={availableCoin}
              setAvailableCoin={setAvailableCoin}
              playersPromise={playersPromise}
            />
          </Suspense>
        ) : (
          <SelectedPlayers />
        )}
      </main>
    </>
  );
};

export default App;
