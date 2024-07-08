import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/header/Header";
import WootBlock from './components/wootblock/WootBlock';
import GameShowcase from './components/GameShowcase/GameShowcase';
import WootSteam from './components/wootsteam/WootSteam';
import Footer from './components/footer/Footer';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="App">
      <Header />
      <WootBlock />
      <GameShowcase />
      <WootSteam />
      <Footer />
    </div>,
  },
  {
    path: "/welcome",
    element: <div className="App">
      <Header />
      <WootBlock />
      <GameShowcase />
      <WootSteam />
      <Footer />
    </div>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
