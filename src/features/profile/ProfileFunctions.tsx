import type { IUserProfile } from "@/shared/interfaces/IUserProfile"
import { ProfileService } from "@/shared/services/ProfileService";
import { userClient } from "@/shared/utils/Axios";
import { useState } from "react"


export const useProfileFunctions = () => {
    const [userProfile, setUserProfile] = useState<IUserProfile>({
        name: "",
        level: 0,
        nextLevelXp: 0,
        ranking: 0,
        xp: 0
    });


    const {getProfile} = ProfileService(userClient);

    return {
        userProfile
    }
}