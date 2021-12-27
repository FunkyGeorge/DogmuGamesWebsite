import React from "react";
import { Parallax } from 'react-parallax';
import './WootBlock.css';

const wootBackground = require("../../images/screens/screen1.png");
const wootLogo = require("./../../images/WakeOutOfTwilight_Logo_small_transparent.png");

const WootBlock = () =>
<Parallax blur={0} bgImage={wootBackground} bgImageAlt="Wake Out Of Twilight Screenshot" strength={400}>
    <div className="content-overlay">
        <img className="woot-logo" src={wootLogo} alt="Wake Out Of Twilight Logo" />
        <p className="content-text">
            Join in on Jesse's adventure, where he navigates the city of the future to stop an evil plan to mind control the city
        </p>
        <a className="wishlist-link" href="https://store.steampowered.com/app/1562830/Wake_out_of_Twilight/"  target="_blank" rel="noreferrer">Wishlist</a>
    </div>
</Parallax>;

export default WootBlock;