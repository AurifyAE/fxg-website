import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from './pages/Account';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import TermsAndCondition from './pages/TermsAndCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';


function App() {

  return (
    <div className='font-[Lato]'>
      <Router>
        <Banner />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
