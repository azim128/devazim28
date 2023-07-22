import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/utility/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Protfolio from "./pages/Protfolio";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/*" element=<Home/> />
        <Route path="/" element=<Home/> />
        <Route path="/about" element=<About/> />
        <Route path="/blog" element=<Blog/> />
        <Route path="/contact" element=<Contact/> />
        <Route path="/portfolio" element=<Protfolio/> />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
