import React from "react";
import GameMeta from "../../models/GameMeta";
import './GameShowcase.css';

interface GameCardProps {
    game: GameMeta;
    OnPress: (string) => any;
}

const GameCard = ({ game, OnPress }: GameCardProps) =>
<div className="GSC_card" style={{ backgroundImage: `url(${game.backgroundImage})` }}>
    <div className="overlay"></div>
    <div className="image-container">
        <img className="image" src={game.image} />
    </div>
    <p className="name">{game.name}</p>
    <p className="description">{game.description}</p>
    <div className="linkbox">
        <button className="link" onClick={OnPress(game.link)}>PLAY</button>
    </div>
</div>;

export default GameCard;