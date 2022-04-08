import { useEffect, useState } from "react";

const getWidth = () => window.innerWidth 
|| document.documentElement.clientWidth 
|| document.body.clientWidth;

export const useMobileViewDetector = () => {
    const [width, setWidth] = useState(getWidth());

    const resizeWidth = () => {
        setWidth(getWidth());
    }

    useEffect(() => {
        window.addEventListener('resize', resizeWidth);

        return () => {
            window.removeEventListener('resize', resizeWidth);
        }
    });

    return width < 500;
}