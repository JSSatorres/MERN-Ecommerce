import "./App.css";
import Home from "./pages/home/";
import { Routes, Route } from "react-router-dom";
import BuyIn from "./pages/BuyIn/BuyIn";

function App() {
  return (
    <div className="App">

      <Routes>
          {/* <Route path="/login" element={<LoginAdmin />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/buyin" element={<BuyIn />} />
        </Routes>
    </div>
  );
}

export default App;
