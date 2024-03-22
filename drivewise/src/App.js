import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Calendar from "./Pages/Calendar/Calendar";
import DashBoard from "./Pages/Dashboard/Dashboard";
import SignIn from "./Pages/SignIn/SignIn";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SignUp from "./Pages/SignUp/SignUp";
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
