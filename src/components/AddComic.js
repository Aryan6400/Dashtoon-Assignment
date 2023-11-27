import React from 'react';
import { Button } from '@mui/material';
import MuiTextField from '@mui/material/TextField';
import { Backdrop, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useImage } from '../context/ImageContext';
import { useTheme } from '../context/ThemeContext';
import trackRate from '../controllers';
import "./AddComic.css";
import ErrorAlert from './Alert';
import TooMany from './Error Handlers/TooMany';
import NotFound from './Error Handlers/NotFound';
import RateLimiter from './Error Handlers/RateLimiter';

function AddComic() {
    const [data, setData] = useState({input1: "",input2: "",input3: "",input4: "",input5: "",input6: "",input7: "",input8: "",input9: "",input10: ""})
    const [isLoading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [retry, setRetry] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [rateExceed, setRateExceed] = useState(false);
    const {images,setImages,setErrorStatus} = useImage();
    const {theme} = useTheme();
    const navigate = useNavigate();
    function handleChange(event){
        const { name, value } = event.target;
        setData(prev => {
            return {
            ...prev,
            [name]: value
            }
        })
    }
    async function handleSubmit(event){
        if(data.input1== "" && data.input2=="" && data.input3== "" && data.input4=="" && data.input5== "" && data.input6=="" && data.input7== "" && data.input8=="" && data.input9== "" && data.input10=="") {
            setOpen(true);
            return;
        }
        const rateState=trackRate();
        if(rateState==false){
            setRateExceed(true);
            return;
        }
        setLoading(true);
        let status=1;
        let panels=Object.values(data);
        try {
            const imgurls = await Promise.all(
                panels.map(async (el) => {
                    if(el=="") return "";
                    const newData={inputs:el};
                    const response = await fetch("https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",{
                        method: "POST",
                        mode: "cors",
                        cache: "no-cache",
                        credentials: "same-origin",
                        headers:{ 
                            "Accept": "image/png",
                            "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
                            "Content-Type": "application/json" 
                        },
                        redirect: "follow",
                        referrerPolicy: "no-referrer",
                        body: JSON.stringify(newData),
                    });
                    console.log(response);
                    if(response.status>205){
                        status=response.status;
                        return "";
                    }
                    const result = await response.blob();
                    const myImage = URL.createObjectURL(result);
                    return myImage;
                })
            );
            let previous=images;
            for (let i=0;i<10;i++) {
                if (imgurls[i]!=="") {
                    previous[i]=imgurls[i];
                }
            }
            setImages(previous);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        event.preventDefault();
        setData({input1: "",input2: "",input3: "",input4: "",input5: "",input6: "",input7: "",input8: "",input9: "",input10: ""})
        setLoading(false);
        if(status==403){
            setRetry(true);
        }
        else if(status==404){
            setNotFound(true);
        }
        else if(status!=1){
            setErrorStatus(status);
            navigate("/error");
        }
        else{
            navigate("/comic");
        }
    }

    const handleClose = (event) => {
        setOpen(false);
    };

    return (
        <>
            <Backdrop
            sx={{ color: "#fff", zIndex: 5 }}
            open={isLoading}
            >
                <CircularProgress color="secondary" />
            </Backdrop>
            <div className="addcomic">
                <div className={`form-title ${theme=="Dark"?"title-dark":null}`}>
                    <h2>Generate Your Own Comic</h2>
                    <h4>Enter panel information and see the magic...</h4>
                </div>
                <form className='add-comic' id={theme=="Dark"?"add-comic-dark":null}>
                    <div className='name-div'>
                        <MuiTextField className={`add-comic-input ${theme=="Dark"?"input-dark":null}`} label="Panel 1" name="input1" onChange={handleChange} value={data.input1} />
                    </div>
                    <div className='name-div'>
                        <MuiTextField className={`add-comic-input ${theme=="Dark"?"input-dark":null}`} label="Panel 2" name="input2" onChange={handleChange} value={data.input2} />
                    </div>
                    <div className='name-div'>
                        <MuiTextField className={`add-comic-input ${theme=="Dark"?"input-dark":null}`} label="Panel 3" name="input3" onChange={handleChange} value={data.input3} />
                    </div>
                    <div className='name-div'>
                        <MuiTextField className={`add-comic-input ${theme=="Dark"?"input-dark":null}`} label="Panel 4" name="input4" onChange={handleChange} value={data.input4} />
                    </div>
                    <div className='name-div'>
                        <MuiTextField className={`add-comic-input ${theme=="Dark"?"input-dark":null}`} label="Panel 5" name="input5" onChange={handleChange} value={data.input5} />
                    </div>
                    <div className='name-div'>
                        <MuiTextField className={`add-comic-input ${theme=="Dark"?"input-dark":null}`} label="Panel 6" name="input6" onChange={handleChange} value={data.input6} />
                    </div>
                    <div className='name-div'>
                        <MuiTextField className={`add-comic-input ${theme=="Dark"?"input-dark":null}`} label="Panel 7" name="input7" onChange={handleChange} value={data.input7} />
                    </div>
                    <div className='name-div'>
                        <MuiTextField className={`add-comic-input ${theme=="Dark"?"input-dark":null}`} label="Panel 8" name="input8" onChange={handleChange} value={data.input8} />
                    </div>
                    <div className='name-div'>
                        <MuiTextField className={`add-comic-input ${theme=="Dark"?"input-dark":null}`} label="Panel 9" name="input9" onChange={handleChange} value={data.input9} />
                    </div>
                    <div className='name-div'>
                        <MuiTextField className={`add-comic-input ${theme=="Dark"?"input-dark":null}`} label="Panel 10" name="input10" onChange={handleChange} value={data.input10} />
                    </div>
                    <Button onClick={handleSubmit} id='add-comic-btn'>
                        Generate
                    </Button>
                </form>
                <ErrorAlert open={open} handleClose={handleClose}/>
                <TooMany open={retry} handleClose={handleClose}/>
                <NotFound open={notFound} handleClose={handleClose}/>
                <RateLimiter open={rateExceed} handleClose={handleClose}/>
            </div>
        </>
    )
}

export default AddComic;