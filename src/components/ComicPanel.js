import { Link, useNavigate } from "react-router-dom";
import "./ComicPanel.css";
import { useEffect } from "react";
import { useImage } from "../context/ImageContext";
import { useTheme } from "../context/ThemeContext";
import ImageCanvas from "../context/CanvasContext";


function ComicPanel(){
    const {images} = useImage();
    const {theme} = useTheme();
    const navigate=useNavigate();
    useEffect(()=>{
        const stored=images.filter(el=>{
            if(el!="") return el;
        })
        if(stored.length==0) navigate("/");
    },[])
    return (
        <>
            <div></div>
            <div className={theme=="Dark" ? "generate-new-comic-dark" : "generate-new-comic"}>
                <Link to="/">
                    Generate new comic
                </Link>
            </div>
            <div className='panel-div'>
                {images.map((el,ind)=>{
                    return (
                        <img src={el} alt={el=="" ? "Empty Panel/Resource not found" : "Panel"+ind} id={el=="" ? "empty-image" : null}/>
                    );
                })}
            </div>
            <ImageCanvas />
        </>
    )
}

export default ComicPanel;