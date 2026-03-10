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
  const [availableCoin, setAvailableCoin] = useState(0);

  // PurchasedPlayerState
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  // HandleClaimGPCoinFunction
  const handleClaimGP = () => {
    setAvailableCoin(availableCoin + 1000000); // ClaimOneMillionGP
  };

  const handleRemovePlayer = (p) => {
    // console.log(p);

    const filteredData = purchasedPlayers.filter(
      (removePlayer) => removePlayer.playerName !== p.playerName,
    );
    // console.log(filteredData);
    setPurchasedPlayers(filteredData);
    setAvailableCoin(
      availableCoin +
        parseInt(p.price.split("GP").join("").split(",").join("")),
    );
  };

  return (
    <>
      {/* Header*/}
      <Header availableCoin={availableCoin} />

      {/* Main */}
      <main>
        {/* BannerSection */}
        <Banner handleClaimGP={handleClaimGP} />

        {/*  */}

        {/* SectionTitleAndButton */}
        <div
          id="features"
          className="max-w-7xl mx-auto px-4 lg:px-0 flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 items-center mt-20"
        >
          <h2
            className={`font-sora font-bold text-xl md:text-[28px] lg:text-4xl text-e-football-yellow`}
          >
            {toggle === true
              ? "Available Players"
              : `Selected Players (${purchasedPlayers.length}/6)`}
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
              Selected ({purchasedPlayers.length}/6)
            </button>
          </div>
        </div>

        {/* Players */}
        {toggle === true ? (
          <Suspense fallback={<Loader />}>
            <AvailablePlayers
              purchasedPlayers={purchasedPlayers}
              setPurchasedPlayers={setPurchasedPlayers}
              availableCoin={availableCoin}
              setAvailableCoin={setAvailableCoin}
              playersPromise={playersPromise}
            />
          </Suspense>
        ) : (
          <SelectedPlayers
            purchasedPlayers={purchasedPlayers}
            handleRemovePlayer={handleRemovePlayer}
            setToggle={setToggle}
          />
        )}
      </main>
    </>
  );
};

export default App;
