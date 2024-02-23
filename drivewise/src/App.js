import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Account from "./Pages/Account/Account";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
