import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Lookbook from './pages/Lookbook/Lookbook';
import About from './pages/About/About';
import NewClients from './pages/NewClients/NewClients';
import Policies from './pages/Policies/Policies';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/lookbook" element={<Lookbook />} />
      <Route path="/about" element={<About />} />
      <Route path="/new-clients" element={<NewClients />} />
      <Route path="/policies" element={<Policies />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;