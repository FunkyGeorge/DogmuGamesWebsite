import React from "react";
import { Parallax } from 'react-parallax';
import './WootBlock.css';

const wootBackground = require("./../../images/WooT_Cover_Art_Landscape_Image_Only_2.png");
const wootLogo = require("./../../images/Libarary_Logo1280x720.png");

const WootBlock = () =>
<Parallax blur={0} bgImage={wootBackground} bgImageStyle={{ marginTop: -50 }} bgImageAlt="Wake Out Of Twilight Screenshot" strength={400}>
    <div className="content-overlay">
        <img className="woot-logo" src={wootLogo} alt="Wake Out Of Twilight Logo" />
        <p className="content-text">
            Join in on Jesse's adventure, where he navigates the city of the future to stop an evil plan to mind control the city
        </p>
        <a className="wishlist-link" href="https://store.steampowered.com/app/1562830/Wake_out_of_Twilight/"  target="_blank" rel="noreferrer">Wishlist</a>
    </div>
</Parallax>;

export default WootBlock;