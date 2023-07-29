import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactForm from "./pages/Contact";
import Nav from "./nav/Nav";
import OneNews from "./pages/OneNews";
import Login from "./templates/Login";
import SingUp from "./form/Form";
import ContextApi from "./context/ContextApi";

function App() {
  return (
    <BrowserRouter>
      <ContextApi>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/detail/:title" element={<OneNews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<SingUp />} />
        </Routes>
      </ContextApi>
    </BrowserRouter>
  );
}

export default App;
