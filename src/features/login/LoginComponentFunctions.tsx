import { useEffect, useState } from "react";


export const useLoginComponentFunctions = () => {
    const [scale, setScale] = useState('full');

    useEffect(() => {
        setTimeout(() => {
            setScale('0')
        }, 520)
    }, [])
    return {
        scale
    }
}