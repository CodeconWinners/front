import Lottie from "lottie-react";
import animation from "@/assets/animations/Animation - 1747518971256.json";
import { useLoginComponentFunctions } from "./LoginComponentFunctions";
import { ToastContainer } from "react-toastify";
import type { FC } from "react";

export const LoginComponent: FC = () => {

    const { scale, loading } = useLoginComponentFunctions();

    return (
        <>
            <ToastContainer />
            <div
                className="bg-blue-950 max-h-screen h-screen flex justify-end flex-col transition-all
                lg:flex-row lg:h-screen
                "
            >
                <div
                    className=" h-[35%]"
                >
                    <div
                        className="flex flex-row gap-10 p-10 text-center
                        
                        lg:w-[60vw] lg:flex-col lg:h-screen lg:justify-center items-center
                        "
                    >
                        <p
                            className="text-5xl text-white shadow-2xl"
                        >
                            Seu chefe não precisa saber que você está aqui.
                        </p>
                        <Lottie
                            className="hidden lg:flex w-[40vw]"
                            animationData={animation}
                            loop={true}
                            alt="Imagem que mostra um porco com uma moeda em cima"
                        />
                    </div>
                </div>
                <div
                    className={`flex bg-white h-[36rem] translate-y-${scale} w-full rounded-t-3xl transition-all duration-700
                        flex-col
                        items-center p-10 gap-10
                        lg:h-full lg:w-[40vw] lg:rounded-tl-3xl lg:rounded-tr-none lg:justify-center 
                    `}
                >
                    <div
                        className="flex flex-col text-center gap-2"
                    >
                        {loading ? (
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                        ) : (
                            <h1 className="text-5xl font-semibold text-center drop-shadow-lg">
                                Desabafa.dev
                            </h1>
                        )}
                        <p className="opacity-35">IA é sigilosa. Diferente do seu grupo da firma.</p>
                    </div>
                    <a href="https://fa-google-integration.azurewebsites.net/api/google/auth/consent" target="_self" className="cursor-pointer bg-primary text-white p-2 rounded-md">
                        Logar <i className="fab fa-google"></i>
                    </a>
                </div>
            </div>
        </>
    )
}