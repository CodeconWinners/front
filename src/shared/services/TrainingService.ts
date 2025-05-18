import type { Axios, AxiosPromise } from "axios"
import type { ITraining } from "../interfaces/ITraining"



export const TrainingService = (fetch: Axios) => {

    return {
        getTraining(): AxiosPromise<{training: ITraining}> {
            return fetch.get('/training/generate')
        }
    }
}