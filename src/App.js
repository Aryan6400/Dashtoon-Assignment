import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddComic from "./components/AddComic";
import { useEffect } from "react";
import ComicPanel from './components/ComicPanel';
import "./App.css";
import ErrorPage from "./components/Error Handlers/ErrorPage";
import { useTheme } from "./context/ThemeContext";


function App() {
  const {theme,setTheme} = useTheme();
  useEffect(()=>{
    const storedSession = localStorage.getItem("session");
    if(!storedSession){
      const newSession = "0,"+Date.now().toString();
      localStorage.setItem("session",newSession);
    }
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div className="App1"><AddComic /></div>} />
          <Route path="/comic" element={<div className={theme=="Dark" ? "App2-dark" : "App2"}><ComicPanel /></div>} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
