import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/header/Header";
import WootBlock from './components/wootblock/WootBlock';
import HonedByStone from './components/HonedByStone/HonedByStone';
import WootSteam from './components/wootsteam/WootSteam';
import Footer from './components/footer/Footer';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="App">
      <Header />
      <WootBlock />
      <HonedByStone />
      <WootSteam />
      <Footer />
    </div>,
  },
  {
    path: "/welcome",
    element: <div className="App">
      <Header />
      <WootBlock />
      <HonedByStone />
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
