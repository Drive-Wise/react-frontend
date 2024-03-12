import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Founders from "../src/Pages/Founders/Founders"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Founders" element={<Founders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
