
import type { SaveUserDto } from "@/shared/dtos/SaveUserDto";
import { LocalStorageService } from "@/shared/services/LocalStorageService";
import { LoginService } from "@/shared/services/LoginService";
import { CalendarClient } from "@/shared/utils/Axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";


export const useLoginComponentFunctions = () => {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [scale, setScale] = useState('full');
    const [user, setUser] = useState<SaveUserDto>({
        email: "",
        jobTitle: "",
        lastName: "",
        name: "",
        userId: "",
        jobDescription: ""
    })
    const googleCode = searchParams.get('code');
    const navigate = useNavigate();

    const { getUserId, initializeAnalizeAll, saveUser } = LoginService(CalendarClient);
    const { set } = LocalStorageService();

    useEffect(() => {
        setTimeout(() => {
            setScale('0')
        }, 520)
    }, [])



    useEffect(() => {
        if (googleCode) {
            setLoading(true)
            getUserId(googleCode)
                .then((response) => {
                    if (response.data.userId) {
                        toast.info("Estamos preparando tudo para você dar a descupa pro seu chefe! 😉")
                        set("userId", response.data.userId);
                        initializeAnalizeAll(response.data.userId)
                            .then(() => {
                                const userObjct = {...user};
                                saveUserDb({...userObjct, userId: response.data.userId})
                            })
                            .finally(() => {
                                setLoading(false)
                                navigate('/dashboard/perfil')
                            })
                    } else {
                        toast.error("Ops acho que tivemos um terremoto aqui, não deu pra achar sua conta!😲")
                    }
                })
        }
    }, [googleCode]);


    const changedValue = (field: keyof SaveUserDto, value: any) => {
        if (user && user[field] !== value) {
            setUser(prevValues => ({ ...prevValues, [field]: value }));
        }
    }

    const saveUserDb = (object: SaveUserDto) => {
        saveUser(object)
    }

    return {
        scale,
        loading,
        user,
        changedValue
    }
}