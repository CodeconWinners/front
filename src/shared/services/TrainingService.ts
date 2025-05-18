import type { Axios, AxiosPromise } from "axios"
import type { IFeedback, IOptionChoice, ITraining } from "../interfaces/ITraining"



export const TrainingService = (fetch: Axios) => {

    return {
        getTraining(): AxiosPromise<ITraining> {
            return fetch.get('/training/generate')
        },

        generateFeedback(userResponse: IOptionChoice): AxiosPromise<IFeedback> {
            return fetch.post('/training/check', { 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userResponse)
             })
        },
    }
}