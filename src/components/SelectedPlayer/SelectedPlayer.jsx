import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";

const SelectedPlayer = ({ player, handleRemovePlayer }) => {
  //   console.log(player);
  const { playerImage, playerName, playingStyle } = player;

  //   RemoveSelectedPlayer
  const removeSelectedPlayer = () => {
    handleRemovePlayer(player);
  };
  return (
    <div className="bg-e-football-nav-blue p-6 border-3 border-white rounded-2xl flex justify-between items-center">
      <div className="flex items-center gap-6">
        <img src={playerImage} className="w-20 h-20 rounded-xl" alt="" />
        <div className="space-y-3 text-white">
          <h5 className="text-xl lg:text-2xl font-semibold">{playerName}</h5>
          <p className="text-sm lg:text-base">{playingStyle}</p>
        </div>
      </div>
      <div>
        <button
          onClick={removeSelectedPlayer}
          className="text-3xl text-e-football-yellow cursor-pointer"
        >
          <RiDeleteBin2Fill />
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
