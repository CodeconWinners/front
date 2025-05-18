import type { Axios, AxiosPromise } from "axios"


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
        }
    }
}