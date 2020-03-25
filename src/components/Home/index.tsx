import React, { useContext } from "react";
import { StoreContext } from "../../store";
import Card from "../Shared/Card";
import Search from "../Search";

const Home: React.FC = () => {
    const { state } = useContext(StoreContext);

    const renderGames = () => {
        if (state.games) {
            return state.games.map(game => <Card key={`gameId-${game.id}`} game={game} />);
        }
    };

    return state.loading ? (
        <React.Fragment>Loading...</React.Fragment>
    ) : (
        <React.Fragment>
            <Search />
            <div>{renderGames()}</div>
        </React.Fragment>
    );
};

export default Home;
