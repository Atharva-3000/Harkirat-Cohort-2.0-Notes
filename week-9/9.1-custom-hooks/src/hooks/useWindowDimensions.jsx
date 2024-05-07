import { useEffect, useState } from "react";

export const useWindowDimensions = () => {
    const [dimention, setDimention] = useState({ width:window.innerWidth, height: window.innerHeight });
  
    const handleResize = () => {
      setDimention({ width: window.innerWidth, height: window.innerHeight });
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return dimention;
  };