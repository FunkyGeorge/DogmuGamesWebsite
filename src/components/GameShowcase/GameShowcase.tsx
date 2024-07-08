import React, { useEffect, useState } from "react";
import './GameShowcase.css';
import GameShowCaseViewModel from "./GameShowcaseViewModel";
import GameCard from "./GameCard";


export default function GameShowcase(){
    const [viewModel, setViewModel] = useState(new GameShowCaseViewModel());

    return (<div className="GSC_container">
        <div className="GSC_library">
            {viewModel && viewModel.games.map((game) => <GameCard key={game.name} game={game} OnPress={viewModel.OnLinkPress} />)}
        </div>
    </div>);
}
