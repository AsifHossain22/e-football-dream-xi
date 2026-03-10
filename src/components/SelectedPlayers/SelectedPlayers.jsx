import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ purchasedPlayers, handleRemovePlayer }) => {
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
