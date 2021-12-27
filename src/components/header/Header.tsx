import React from "react";
import './header.css';

const dogmuLogo = require("../../images/Dogmu_Logo_Text.png");

const Header = () =>
    <header>
        <div className="header-content">
            <p className="header-text">Home</p>
            <img className="header-logo" src={dogmuLogo} alt="Dogmu Games Logo" />
            <div className="header-social-links">
                <a href="https://twitter.com/DogmuGames" target="_blank" rel="noreferrer">
                    <img className="header-social-icon" src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png" alt="Twitter logo social icon" />
                </a>
                <a href="https://www.instagram.com/dogmugames" target="_blank" rel="noreferrer">
                    <img className="header-social-icon" src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png" alt="Instagram logo social icon" />
                </a>
            </div>
        </div>
    </header>;

export default Header;