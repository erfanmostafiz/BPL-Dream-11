import { useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/playerType";
import { FaUser, FaTrophy } from "react-icons/fa";
import { toast } from "react-toastify";

interface IPlayerCard {
    player: Iplayer;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: Iplayer[];
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({
    player,
    coin,
    setCoin,
    selectedPlayers,
    setSelectedPlayers,
}: IPlayerCard) => {
    const [isSelected, setIsSelected] = useState(false);

    // console.log(coin, setCoin, "from card");

    const handleSelectPlayer = () => {
        setIsSelected(true);
        const newCoinPrice = coin - player.price;
        if (newCoinPrice >= 0) {
            setCoin(newCoinPrice);
            toast.success(`${player.playerName} is purchased successfully`);
        } else {
            toast.error("Not enough coins to purchase");
        }

        // selected players logic
        setSelectedPlayers([...selectedPlayers, player]);
    };

    return (
        <div className="card bg-base-100 border border-base-200 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {/* Player Image */}
            <figure className="relative h-64 bg-base-200">
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="w-full h-full Iplayer-cover"
                />

                {/* Player Type Badge */}
                <span className="absolute top-4 right-4 badge badge-primary font-semibold px-4 py-3">
                    {player.playerType}
                </span>
            </figure>

            <div className="card-body p-5">
                {/* Player Name */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <FaUser />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold leading-tight">
                            {player.playerName}
                        </h2>
                        <p className="text-sm text-base-content/60">
                            {player.origin}
                        </p>
                    </div>
                </div>

                <div className="divider my-2"></div>

                {/* Player Stats */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-base-200 p-3">
                        <p className="text-xs text-base-content/60 uppercase tracking-wide">
                            Batting
                        </p>
                        <p className="font-semibold mt-1">
                            {player.battingStyle}
                        </p>
                    </div>

                    <div className="rounded-xl bg-base-200 p-3">
                        <p className="text-xs text-base-content/60 uppercase tracking-wide">
                            Bowling
                        </p>
                        <p className="font-semibold mt-1">
                            {player.bowlingStyle}
                        </p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between mt-2">
                    <div>
                        <p className="text-sm text-base-content/60">
                            Player Rating
                        </p>

                        <div className="flex items-center gap-2 mt-1">
                            <FaTrophy className="text-warning" />
                            <span className="font-bold text-lg">
                                Top Player
                            </span>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-xs text-base-content/60">Price</p>
                        <p className="text-2xl font-extrabold text-primary">
                            ${player.price}
                        </p>
                    </div>
                </div>

                {/* Action */}
                <div className="card-actions mt-4">
                    <button
                        className={`btn btn-primary w-full rounded-xl`}
                        onClick={() => handleSelectPlayer()}
                        disabled={isSelected}
                    >
                        {isSelected == true ? "Selected" : "Choose Player"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
