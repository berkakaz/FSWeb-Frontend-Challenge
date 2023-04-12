import { useEffect } from "react";
import { ToastContainer,toast } from "react-toastify";

import Header from "./components/Headers";
import Skills from "./components/Skillss";
import Profile from "./components/Profiles";
import Projects from "./components/Projectss";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';


function App() {

  useEffect ( ()=> {
    toast(" 🚀 Projeme Hoş Geldin!", {
      position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
className: 'toast-message',

      })
  }, []);

  return (
    <div className="App">
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <ToastContainer />
    
    </div>
  );
}

export default App;