import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About"
// import Contact from "./pages/Contact/Contact";
// import About from "./pages/About/About";
// import Services from "./pages/Services/Services";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
