import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

import DashBoard from "./Pages/Dashboard/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
