import type { Axios, AxiosPromise } from "axios"
import type { UserProfileDto } from "../dtos/UserProfileDto"



export const ProfileService = (client: Axios) => {


    return {
        getProfile (userId: string): AxiosPromise<UserProfileDto> {
            return client.get(`/api/profile/${userId}`)
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