import type { Axios, AxiosPromise } from "axios"
import type { UserProfileDto } from "../dtos/UserProfileDto"
import type { UpdateUserProfile } from "../dtos/UpdateUserProfileDto"



export const ProfileService = (client: Axios) => {


    return {
        getProfile (userId: string): AxiosPromise<UserProfileDto> {
            return client.get(`/api/profile/${userId}`)
        },
        saveProfile (user: UpdateUserProfile): AxiosPromise<void> {
            return client.put(`/api/profile`, user)
        },
        updateXP(userId: string){
            return client.post(`/api/gaming/${userId}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    xp: 100
                })
            })
        }
    }
}