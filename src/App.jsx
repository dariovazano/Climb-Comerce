import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ShoppingCartContext from "./context/ShoppingCartContext";

const App = () => {
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
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </ShoppingCartContext>
    </BrowserRouter>
  );
};

export default App;
