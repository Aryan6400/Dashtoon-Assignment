// ImageCanvas.js
import React, { useRef, useEffect, useState } from 'react';

const ImageCanvas = () => {
    const canvasRef = useRef(null);
    const [annotations, setAnnotations] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Additional setup can be done here

        // Event listener for handling canvas clicks
        const handleCanvasClick = (event) => {
            const x = event.clientX - canvas.offsetLeft;
            const y = event.clientY - canvas.offsetTop;

            const newAnnotation = { text: 'Sample text', x, y };
            setAnnotations([...annotations, newAnnotation]);
        };

        canvas.addEventListener('click', handleCanvasClick);

        // Clean-up function to remove the event listener when the component is unmounted
        return () => {
            canvas.removeEventListener('click', handleCanvasClick);
        };
    }, [annotations]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Redraw the image
        // ...

        // Draw existing annotations
        annotations.forEach(({ text, x, y }) => {
        drawText(context, text, x, y);
        });
    }, [annotations]);

    const drawText = (context, text, x, y) => {
        context.font = '14px Arial';
        context.fillStyle = 'black';
        context.fillText(text, x, y);
    };

    return <canvas ref={canvasRef} width={800} height={600} />;
};

export default ImageCanvas;
