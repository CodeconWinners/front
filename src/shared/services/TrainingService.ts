import type { Axios, AxiosPromise } from "axios"
import type { ITraining } from "../interfaces/ITraining"



export const TrainingService = (fetch: Axios) => {

    return {
        getTraining(): AxiosPromise<ITraining> {
            return fetch.get('/training/generate')
        }
    }
}