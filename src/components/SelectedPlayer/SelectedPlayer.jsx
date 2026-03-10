import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const SelectedPlayer = ({ player, handleRemovePlayer }) => {
  //   console.log(player);
  const { playerImage, playerName, playingStyle } = player;

  //   RemoveSelectedPlayer
  const removeSelectedPlayer = () => {
    // ShowSweetAlertWhenRemovePlayer
    Swal.fire({
      title: `Do you want to remove ${playerName} from your squad?`,
      showCancelButton: true,
      confirmButtonColor: "#ff0082",
      cancelButtonColor: "",
      confirmButtonText: "Yes, remove!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        handleRemovePlayer(player); // RemovePlayerByCallingFunction

        // SuccessMessageAfterClaimingGP
        Swal.fire({
          title: "Success!",
          text: `${playerName} removed from your squad!`,
          confirmButtonColor: "#3132fe",
        });
      }
    });
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
