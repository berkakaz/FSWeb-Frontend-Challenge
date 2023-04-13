import { createContext, useEffect, useState } from "react";
import { ToastContainer,toast } from "react-toastify";

import Header from "./components/Headers";
import Skills from "./components/Skillss";
import Profile from "./components/Profiles";
import Projects from "./components/Projectss";


import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

export const ThemeContext = createContext(null);


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

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light" ));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <ToastContainer />
    
    </div>
    </ThemeContext.Provider>
  );
}

export default App;