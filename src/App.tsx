import { useState } from "react";
import "./App.css";
import SplashScreen from "./components/splash-screen";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Menu from "./components/menu";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative">
      <SplashScreen onComplete={() => setShowSplash(false)} />

      {!showSplash && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
