import type { UserProfileDto } from "@/shared/dtos/UserProfileDto";
import type { IUserProfile } from "@/shared/interfaces/IUserProfile"
import { LocalStorageService } from "@/shared/services/LocalStorageService";
import { ProfileService } from "@/shared/services/ProfileService";
import { userClient } from "@/shared/utils/Axios";
import { useEffect, useState } from "react"


export const useProfileFunctions = () => {
    const [userProfile, setUserProfile] = useState<IUserProfile>({
        name: "",
        level: 0,
        nextLevelXp: 0,
        ranking: 0,
        xp: 0,
        jobTitle: "",
        jobDescription: ""
    });


    const {getProfile} = ProfileService(userClient);
    const {get} = LocalStorageService();

    useEffect(() => {
        loadProfile();
    },[]);

    const loadProfile = () => {
        const userId = get("userId");
        if(userId) {
            getProfile(userId)
            .then((response) => {
                if(response.data) {
                    setUserProfile(formatResponseProfile(response.data))
                }
            })
        }
    }

    const formatResponseProfile = (data: UserProfileDto): IUserProfile => {

        return {
            name: data.name,
            level: data.level,
            xp: data.totalXp,
            ranking: 1,
            jobDescription: data.jobDescription ?? "",
            jobTitle: data.jobTitle
        }
    }

    return {
        userProfile
    }
}