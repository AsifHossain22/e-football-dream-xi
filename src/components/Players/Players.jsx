import React, { use, useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
  // AllPlayersState
  const [playersData, setPlayersData] = useState([]);

  // LoadPlayersFromAPI
  useEffect(() => {
    const loadPlayersData = async () => {
      const res = await fetch("/playersData.json");
      const data = await res.json();
      setPlayersData(data);
    };
    loadPlayersData();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-8 px-4 lg:px-0 mt-4">
      {/* SectionTitleAndButton */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 items-center">
        <h2 className="font-sora font-bold text-xl md:text-[28px] lg:text-4xl text-e-football-yellow">
          Featured Players
        </h2>
        <div className="">
          <button className="btn bg-btn-primary px-5 py-3.5 text-hover-nav-link border-[#13131310]">
            Available
          </button>
          <button className="btn bg-transparent px-5 py-3.5 text-[#13131360] border-[#13131310]">
            Selected (0)
          </button>
        </div>
      </div>

      {/* DynamicPlayersContainer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
        {playersData.map((player, index) => (
          <Player key={index} player={player} />
        ))}
      </div>
    </section>
  );
};

export default Players;
