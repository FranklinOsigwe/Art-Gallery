import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "../src/components/Home";
import Cart from "../src/components/Cart";
import NotFound from "../src/components/NotFound";

  
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
         
     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
