import { Link, useNavigate } from "react-router-dom";
import "./ComicPanel.css";
import { useEffect, useState } from "react";
import { useImage } from "../context/ImageContext";
import { useTheme } from "../context/ThemeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ComicPanel(){
    const {images} = useImage();
    const {theme, setTheme} = useTheme();
    const navigate=useNavigate();
    useEffect(()=>{
        if(images.length==0) navigate("/");
    },[])
    return (
        <>
            <div></div>
            <div className={theme=="Dark" ? "generate-new-comic-dark" : "generate-new-comic"}>
                <Link to="/">
                    Generate new comic
                </Link>
            </div>
            <div className="theme-icon">{theme=="Dark" ? <DarkModeIcon className="dark-icon" onClick={()=>{setTheme("Light")}} /> : <LightModeIcon className="light-icon" onClick={()=>{setTheme("Dark")}} />}</div>
            <div className='panel-div'>
                {images.map((el,ind)=>{
                    return (
                        <img src={el} alt={el=="" ? "Resource not found" : "Panel"+ind}/>
                    );
                })}
            </div>
        </>
    )
}

export default ComicPanel;