import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({
  purchasedPlayers,
  handleRemovePlayer,
  setToggle,
}) => {
  if (purchasedPlayers.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-20 text-center text-white">
        <h3 className="text-2xl lg:text-4xl font-bold mb-4">
          No players selected yet!
        </h3>

        <p className="text-lg lg:text-xl mb-6">
          Start building your dream team by selecting players.
        </p>

        <button
          onClick={() => setToggle(true)}
          className="px-6 py-3 hover:bg-e-football-yellow hover:text-e-football-nav-blue font-bold rounded-full bg-e-football-pink text-white transition-colors duration-300 cursor-pointer"
        >
          Choose Players
        </button>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 lg:px-0 space-y-5 mt-12">
      {purchasedPlayers.map((player, index) => (
        <SelectedPlayer
          key={index}
          player={player}
          handleRemovePlayer={handleRemovePlayer}
        />
      ))}
    </div>
  );
};

export default SelectedPlayers;
