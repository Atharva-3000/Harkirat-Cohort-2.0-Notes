import { useEffect } from "react"

export const useInterval=(fn, timeout)=>{
    useEffect(()=>{
        setInterval(() => {
            fn();
        }, timeout);

        return ()=>{
            clearInterval();
        }
    },[])
}