import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export const useLoginComponentFunctions = () => {
    const [searchParams] = useSearchParams()
    const [scale, setScale] = useState('full');
    const googleCode = searchParams.get('code')

    useEffect(() => {
        setTimeout(() => {
            setScale('0')
        }, 520)
    }, [])

    useEffect(() => {
        console.log({googleCode})
    },[googleCode])
    return {
        scale
    }
}