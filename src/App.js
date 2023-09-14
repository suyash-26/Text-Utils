import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
    const [Mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  
  
    document.body.style.fontFamily = 'Montserrat';
  
    const toggleMode = ()=>{
      if(Mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = '#061124';
        showAlert("Dark mode has been enabled", "success");
      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor = '#d3e0e9';
        showAlert("Light mode has been enabled", "success");
      }
    }
    return (
      <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={Mode}/>} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text To Analyze!" mode={Mode}/>}/>
          </Routes> 
        </div>
        
        </Router>
      </>
    );
  }
  
  export default App;


  // Alert component me ek prop pass kiya h
  // 1. alert ===   ye kya kr rha h msg show krega navbar k niche agr alert null n hua to, ye msg do sec tk show krega fir alert null ho jaega
  //                2 sec k baad setTimeOut k madad se alert k liye bootstrap alert ka use kiya h

  // Navbar me do main props h
  // 1. mode -- iske madad se hmlog navbar ki styling krte h bootstrap k class me dark ya light class add krte styling k liye
  // 2. toggleMode --- ye function as a prop pass kiye h hmlog navbar me jo onClik event pr trigger hota h navbar component me 
  //                    jb hmlog toggle ko click krte or click ki wjh se hmlog yha pr state change kr dete h mode ka

  // About me bs ek props bhea h 
  // 1. mode  --   iski madad se hmlog about page pr text k color ko set kr rhe h agr mode light h to color black else white

  // TextForm me 2 main props h 
  // 1. showAlert --
  // 2. Mode