import React from 'react';
import Header from "./components/header/Header";
import WootBlock from './components/wootblock/WootBlock';
import HonedByStone from './components/HonedByStone/HonedByStone';
import WootSteam from './components/wootsteam/WootSteam';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WootBlock />
      <HonedByStone />
      <WootSteam />
      <Footer />
    </div>
  );
}

export default App;
