import Eight from "./components/WriteUS/Eight";
import Fifth from "./components/OurWorks/Fifth";
import First from "./components/Entrance/First";
import Footer from "./components/Footer/Footer";
import Fourth from "./components/CoreValues/Fourth";
import Navbar from "./components/Navbar/Navbar";
import Second from "./components/WhoWeAre/Second";
import Seventh from "./components/Hiring/Seventh";
import Sixth from "./components/Responsibilty/Sixth";
import Third from "./components/SolvingProblems/Third";
import './components/default.css'
import Assistant from "./components/Assistant/Assistant";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eight />
      <Footer />
      <Assistant />
    </div>
  );
}

export default App;
