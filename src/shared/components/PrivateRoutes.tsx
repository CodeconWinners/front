
import { Outlet, Navigate, useLocation } from "react-router-dom"
// import DefaultRenderBody from "../components/DefaultRenderBody"
import { useEffect, useState } from "react";
// import LoadingLottie from "@/assets/animations/Loading.json";
import {Axios} from "../../shared/utils/Axios";
import type { AxiosResponse } from "axios";
// import { useGlobalAtributeStore } from "../../shared/stores/globalAttributeStore";
// import Lottie from "lottie-react";
interface PrivateRoutesProps {
    redirectTo: string
}

export const PrivateRoutes = ({
    redirectTo,
}: PrivateRoutesProps) => {

    const [valid, setValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const route = useLocation();

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         const attributes = JSON.parse(localStorage.getItem('attributes') || '{}')
    //         Axios
    //             .get(`/api/auth/authenticated/me/${localStorage.getItem('token')}`)
    //             .then((res: AxiosResponse) => {
    //                 // depois trocar isso aqui pra validar a autenticação do usuário
    //                 setValid(true)
    //                 // if (res.data.response?.isAuth) {
    //                 //     setValid(true)
    //                 // }
    //             })
    //             .catch(() => {
    //                 setValid(true) // mesma coisa que o de cima **********************
    //             })
    //             .finally(() => {
    //                 setIsLoading(false)
    //             })
    //     } else {
    //         setValid(false)
    //         setIsLoading(false)
    //     }
    // }, [route, route.pathname])


    return (
        <>
            {isLoading ? (
                <>
                    <div
                        className="w-full h-screen flex flex-col justify-center content-center items-center"
                    >
                        <div className="flex flex-row gap-1 text-slate-700">
                            <p className="text-3xl">Sistema em carregamento</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {valid ? (
                        <>

                            <>

                                <Outlet />
                            </>

                        </>
                    ) : (
                        <Navigate to={redirectTo} />
                    )}
                </>
            )}
        </>
    )
}