import { HashRouter } from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Skills,
} from "./components";

const App = () => {
  return (
    <HashRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Skills />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
