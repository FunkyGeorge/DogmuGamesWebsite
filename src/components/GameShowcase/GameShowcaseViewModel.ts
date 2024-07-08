import GameMeta from "../../models/GameMeta";

const gameData = require("../../data/games.json");

class GameShowcaseViewModel {
    games: GameMeta[];

    constructor() {
        this.games = gameData;
    }

    OnLinkPress = (gameLink: string) => {
        return () => {
            window.open(gameLink);
        }
    }
}

export default GameShowcaseViewModel;