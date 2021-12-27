import React from 'react';
import Header from "./components/header/Header";
import WootBlock from './components/wootblock/WootBlock';
import EmailSignup from './components/emailsignup/EmailSignup';
import WootSteam from './components/wootsteam/WootSteam';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WootBlock />
      <EmailSignup />
      <WootSteam />
      <Footer />
    </div>
  );
}

export default App;
