import {  useEffect,  } from "react";
import { ToastContainer,toast } from "react-toastify";

import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects"


import "./App.css";
import 'react-toastify/dist/ReactToastify.css';


function App() {
 

  useEffect ( ()=> {
    toast(" 🚀 Welcome to my project !", {
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