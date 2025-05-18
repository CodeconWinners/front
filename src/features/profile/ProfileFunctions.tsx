import type { UserProfileDto } from "@/shared/dtos/UserProfileDto";
import type { IUserProfile } from "@/shared/interfaces/IUserProfile"
import { LocalStorageService } from "@/shared/services/LocalStorageService";
import { ProfileService } from "@/shared/services/ProfileService";
import { userClient } from "@/shared/utils/Axios";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";


export const useProfileFunctions = () => {
    const [loading, setLoading] = useState(false);
    const [userProfile, setUserProfile] = useState<IUserProfile>({
        name: "",
        lastName: "",
        email: "exemplo@exemplo.com",
        level: 0,
        nextLevelXp: 0,
        ranking: 0,
        totalXp: 0,
        jobTitle: "",
        jobDescription: ""
    });


    const { getProfile, saveProfile } = ProfileService(userClient);
    const { get } = LocalStorageService();

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = () => {
        const userId = get("userId");
        if (userId) {
            getProfile(userId)
                .then((response) => {
                    if (response.data) {
                        setUserProfile(formatResponseProfile(response.data))
                    }
                })
        }
    }


    const changedValue = (field: keyof IUserProfile, value: any) => {
        if (userProfile && userProfile[field] !== value) {
            setUserProfile(prevValues => ({ ...prevValues, [field]: value }));
        }
    }

    const formatResponseProfile = (data: UserProfileDto): IUserProfile => {

        return {
            userId: data.userId,
            name: data.name,
            level: data.level,
            totalXp: data.totalXp,
            lastName: data.lastName,
            email: data.email,
            ranking: 1,
            jobDescription: data.jobDescription ?? "",
            jobTitle: data.jobTitle,
        }
    }

    const save = () => {
        if(userProfile.userId) {
            setLoading(true)
            saveProfile({
                userId: userProfile.userId,
                email: userProfile.email,
                jobDescription: userProfile.jobDescription,
                jobTitle: userProfile.jobTitle,
                lastName: userProfile.lastName,
                level: userProfile.level,
                name: userProfile.name,
                totalXp: userProfile.totalXp
            })
            .then(() => {
                toast.success("Dados salvos com sucesso!!!")
            })
            .finally(() => {
                setLoading(false)
            })
        }
    }

    return {
        userProfile,
        loading,
        changedValue,
        save
    }
}