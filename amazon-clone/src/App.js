import React, { useContext, useEffect } from "react";
import "./App.css";
// import Header from "./Components/Header/Header";
// import CarouselEffect from "./Components/Carousel/CarouselEffect";
// import Category from "./Components/Category/Category";
// import Product from "./Components/Product/Product";
import Routing from "./Routing";
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import { Type } from "./Utility/action.type.js";
import { auth } from "./Utility/firebase.js";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      {/* <Header /> */}
      <Routing />
    </div>
  );
}

export default App;
