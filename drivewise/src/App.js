import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Account from "./Pages/Account/Account";
import CreateEvent from "./Pages/CreateEvent/CreateEvent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/CreateEvent" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
