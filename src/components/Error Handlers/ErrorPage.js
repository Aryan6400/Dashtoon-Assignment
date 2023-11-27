import { Link, useNavigate } from "react-router-dom";
import { useImage } from "../../context/ImageContext";
import "./ErrorPage.css";
import { useEffect } from "react";

function ErrorPage(){
    const {errorStatus,setErrorStatus} = useImage();
    const navigate=useNavigate();
    useEffect(()=>{
        if(errorStatus==1) navigate("/");
    },[])
    
    return(
        <div className="error-div">
            <h1 className="error-head">{errorStatus}</h1>
            <h3>
                {
                    errorStatus==400 ? "Bad request." : "Internal server error"
                }
            </h3>
            <Link onClick={()=>setErrorStatus(1)} className="go-back" to="/">
                Go to Home page
            </Link>
        </div>
    )
}

export default ErrorPage;