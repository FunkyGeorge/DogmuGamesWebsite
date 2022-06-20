import React from "react";

import "./Footer.css"

const Footer = () =>
    <div id="footer">
        <h4 className="footer-studio">Dogma Games</h4>
        <div>
            <a href="https://twitter.com/DogmaGames_" target="_blank" rel="noreferrer">
                <img className="footer-social-icon" src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png" alt="Twitter logo social icon" />
            </a>
            <a href="https://www.instagram.com/dogmagames" target="_blank" rel="noreferrer">
                <img className="footer-social-icon" src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png" alt="Instagram logo social icon" />
            </a>
        </div>
        <a className="footer-steam-link" href="https://store.steampowered.com/app/1562830/Wake_out_of_Twilight/" target="_blank" rel="noreferrer">https://store.steampowered.com/app/1562830/Wake_out_of_Twilight/</a>
    </div>;

export default Footer;