import { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/playerType";

import PlayerCard from "./PlayerCard";

interface IAvalailableProps {
    players: Iplayer[];
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: Iplayer[];
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const AvailablePlayers = ({
    players,
    coin,
    setCoin,
    selectedPlayers,
    setSelectedPlayers,
}: IAvalailableProps) => {
    // console.log(players, "players from available players");
    // console.log(coin, setCoin, "from available players");
    return (
        <div className="grid grid-cols-3 gap-7 mt-6">
            {players.map((player: Iplayer, ind: number) => {
                return (
                    <PlayerCard
                        player={player}
                        key={ind}
                        coin={coin}
                        setCoin={setCoin}
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                    />
                );
            })}
        </div>
    );
};

export default AvailablePlayers;
