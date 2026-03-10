import React, { use } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({
  purchasedPlayers,
  setPurchasedPlayers,
  playersPromise,
  availableCoin,
  setAvailableCoin,
}) => {
  const playersData = use(playersPromise);

  return (
    <section className="max-w-7xl mx-auto py-8 px-4 lg:px-0 mt-4">
      {/* DynamicPlayersContainer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
        {playersData.map((player, index) => (
          <Player
            key={index}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableCoin={availableCoin}
            setAvailableCoin={setAvailableCoin}
            player={player}
          />
        ))}
      </div>
    </section>
  );
};

export default AvailablePlayers;
