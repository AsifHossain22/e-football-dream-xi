import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const Player = ({
  player,
  availableCoin,
  setAvailableCoin,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  // DestructuringPlayerData
  const {
    playerImage,
    playerName,
    country,
    playingRole,
    playingStyle,
    price,
    rating,
  } = player;

  // SelectedPlayerState
  const [isSelected, setIsSelected] = useState(false);

  // HandleSelectedFunction
  const handleSelected = (playerData) => {
    const playerPrice = parseInt(
      playerData.price.split("GP").join("").split(",").join(""),
    );
    if (availableCoin < playerPrice) {
      Swal.fire({
        icon: "warning",
        title: "You don't have enough GP to sign this player!",
        confirmButtonColor: "#ff2b7a",
      });
      return;
    }
    setIsSelected(true);
    setAvailableCoin(availableCoin - playerPrice);
    setPurchasedPlayers([...purchasedPlayers, player]);

    // ShowSweetAlertWhilePlayerSelection
    Swal.fire({
      icon: "success",
      title: `${playerName} added to your squad!`,
      confirmButtonColor: "#ff2b7a",
    });
  };

  return (
    <>
      {/* SinglePlayerCard */}
      <div className="p-6 rounded-2xl bg-e-football-nav-blue border-5 border-[#ffffff] text-white">
        {/* PlayerImage */}
        <div className="mb-6">
          <img
            src={playerImage}
            alt="Player Image"
            className="rounded-2xl mx-auto w-full h-75 object-top"
          />
        </div>
        {/* PlayerName */}
        <div className="flex items-center gap-4">
          <span>
            <FaUser />
          </span>
          <span className="text-lg font-bold">{playerName}</span>
        </div>
        {/* PlayerNationalityAndRole */}
        <div className="flex justify-between items-center border-b-2 border-[#ffffff50] pb-4">
          <span className="text-base font-semibold">{country}</span>
          <span className="px-5 py-3.5 m-2 text-sm md:text-base text-white hover:text-e-football-nav-blue font-bold bg-e-football-pink hover:bg-e-football-yellow rounded-full transition-colors duration-500 cursor-pointer">
            {playingRole}
          </span>
        </div>
        {/* PlayerCardFooter */}
        <div className="pt-4">
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold">Rating:</span>
            <span className="text-base font-semibold">{rating}</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-base font-semibold">Playing Style:</span>
            <span className="text-base font-semibold">{playingStyle}</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm lg:text-base font-semibold">
              Price: {price}
            </span>
            <button
              disabled={isSelected}
              onClick={() => {
                handleSelected(player);
              }}
              className="px-5 py-3.5 text-sm md:text-base text-e-football-nav-blue hover:text-white font-bold bg-e-football-yellow hover:bg-e-football-pink rounded-full transition-colors duration-500 cursor-pointer disabled:opacity-100 disabled:bg-gray-400 disabled:text-e-football-nav-blue disabled:cursor-not-allowed"
            >
              {isSelected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
