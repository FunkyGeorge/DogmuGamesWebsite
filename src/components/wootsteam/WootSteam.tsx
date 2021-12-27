import React from "react";
import { Parallax } from 'react-parallax';
import './WootSteam.css';

const wootLogo = require("./../../images/WakeOutOfTwilight_Large_icon.png");

const WootSteam = () =>
<Parallax blur={0} bgImage={wootLogo} bgImageAlt="Wake Out Of Twilight Big Icon" strength={400}>
    <div className="content-overlay">
        <p className="steam-game-title">
            WAKE OUT OF TWILIGHT
        </p>
        <iframe src="https://store.steampowered.com/widget/1562830/" frameBorder="0" width="646" height="190"></iframe>
    </div>
</Parallax>;

export default WootSteam;