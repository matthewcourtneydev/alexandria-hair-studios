import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Lookbook from "./pages/Lookbook/Lookbook";
import HairEdit from "./pages/HairEdit/HairEdit";
import About from "./pages/About/About";
import NewClients from "./pages/NewClients/NewClients";
import Policies from "./pages/Policies/Policies";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/hair-edit" element={<HairEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="/new-clients" element={<NewClients />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
