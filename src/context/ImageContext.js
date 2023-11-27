import { createContext, useContext, useState } from "react";

const ImageContext = createContext();

function ImageProvider({children}){
    const [images, setImages] = useState([]);
    const [errorStatus, setErrorStatus] = useState(1);
    
    return (
        <ImageContext.Provider value={{images, setImages, errorStatus, setErrorStatus}}>
            {children}
        </ImageContext.Provider>
    )
}

export const useImage = () => {
    return useContext(ImageContext);
}

export default ImageProvider;