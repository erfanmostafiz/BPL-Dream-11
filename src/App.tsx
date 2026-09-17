import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Players from "./components/players/Players";
import type { Iplayer } from "./types/playerType";

const playersFetch = async (): Promise<Iplayer[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
};

function App() {
    // console.log(playersPromise);

    // aggeh bar bar data iniate hocchilo and bar bar data fetch hocchilo
    // const playersPromise = playersFetch();

    // state e dile bar bar trigger hobe na
    const [playersPromise] = useState(() => playersFetch());

    const [coin, setCoin] = useState(5000);

    return (
        <>
            <Nav coin={coin}></Nav>
            <Banner></Banner>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Players
                    playersPromise={playersPromise}
                    coin={coin}
                    setCoin={setCoin}
                />
            </Suspense>
        </>
    );
}

export default App;
