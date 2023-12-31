import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Cart from "./components/Cart";
import ItemDetail from "./components/ItemDetail";
import ShoppingCartContext from "./context/ShoppingCartContext";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";

const App = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <ShoppingCartContext>
        <NavBar />
        <Routes>
          {/* <ItemListContainer/> */}

          <Route exact path="/" element={<Home />} />

          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/category/:category"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </ShoppingCartContext>
    </BrowserRouter>
  );
};

export default App;
