import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import About from "./components/About";
import { Toaster } from "react-hot-toast";

function App() {
  return (
     <BrowserRouter>
      <Toaster position="top-right" toastOptions={{ duration: 3500 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={ <SignIn/>} />
        <Route path="/signup" element={ <SignUp/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
