import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Head from "./assets/components/Head";
// import {BrouserRouter as Router, } from 'react-router-dom';
// import Home from "./assets/components/Home";
import Body from "./assets/components/Body";
import RestaurantMenu from "./assets/components/RestaurantMenu";
import { Coordinates, Visibility } from "./context/contextApi";

function App() {
  const [visible, setVisible] = useState(false);
  const [coord, setCoord] = useState({ lat: 18.9690247, lng: 72.8205292 });

  return (
    <Coordinates.Provider value={{coord, setCoord}}>
      <Visibility.Provider value={{ visible, setVisible }}>
        <div className={visible ? "overflow-hidden max-h-screen" : ""}>
          <Routes>
            <Route path="/" element={<Head />}>
              {/* <Route path="/res" element={<Body/>}></Route> */}
              <Route path="/" element={<Body />} />
              <Route path="/restaurantMenu/:id" element={<RestaurantMenu />} />
            </Route>
          </Routes>
          //{" "}
          {/* <> */}
            {/* // <Head /> */}
            {/* // <Body /> */}
            //{" "}
          {/* </> */}
        </div>
      </Visibility.Provider>
    </Coordinates.Provider>
  );
}

export default App;
