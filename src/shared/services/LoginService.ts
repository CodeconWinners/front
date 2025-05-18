import type { Axios, AxiosPromise } from "axios"
import type { SaveUserDto } from "../dtos/SaveUserDto"


export const LoginService = (fetch: Axios) => {

    return {
        getUserId(code: string): AxiosPromise<{message: string, userId: string}> {
            return fetch.get('/google/auth/callback', {
                params: {
                    code
                }
            })
        },
        initializeAnalizeAll(userId: string) {
            return fetch.get('/calendar/analyze-all', {
                params: {
                    userId
                }
            })
        },
        saveUser(userObject:SaveUserDto) {
            return fetch.post('/api/profile', userObject);
        }
    }
} 