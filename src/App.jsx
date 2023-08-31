import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
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
    }, 5000);
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <ShoppingCartContext>
        <Routes>
          {/* <ItemListContainer/> */}

          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
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
