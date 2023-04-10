import logo from "./logo.svg";
import "../src/App.css";
import Header from "./components/Headers";
import Skills from "./components/Skillss";
import Profile from "./components/Profiles";
import Projects from "./components/Projectss";
import Footer from "./components/Footers";

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;