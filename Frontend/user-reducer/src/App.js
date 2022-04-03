import "./App.css";
import Home from "./pages/home/";
import { Routes, Route } from "react-router-dom";
import BuyIn from "./pages/BuyIn/BuyIn";
import ShoppingCartProvider from "./shoppingCart.Provider/shoppingCartProvider";

function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        {/* <Route path="/login" element={<LoginAdmin />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/buyin" element={<BuyIn />} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
