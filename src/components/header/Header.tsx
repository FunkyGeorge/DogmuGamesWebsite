import React from "react";
import DiscordSVG from "../../images/icons/icons8-discord.svg";
import './header.css';

const dogmaLogo = require("../../images/Dogmu_Logo_Text_transparent.png");

const Header = () =>
    <header>
        <div className="header-content">
            <p className="header-text">Home</p>
            <img className="header-logo" src={dogmaLogo} alt="Dogma Games Logo" />
            <div className="header-social-links">
                <a href="https://twitter.com/DogmaGames_" target="_blank" rel="noreferrer">
                    <img className="header-social-icon" src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png" alt="Twitter logo social icon" />
                </a>
                <a href="https://www.instagram.com/dogmagames" target="_blank" rel="noreferrer">
                    <img className="header-social-icon" src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png" alt="Instagram logo social icon" />
                </a>
                <a href="https://discord.gg/3GZPB24bnH" target="_blank" rel="noreferrer" style={{ marginLeft: 1 }}>
                    <img className="header-social-icon" src={DiscordSVG} alt="Discord logo social icon" />
                </a>
            </div>
        </div>
    </header>;

export default Header;