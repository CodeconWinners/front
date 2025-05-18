import type { Axios, AxiosPromise } from "axios"
import type { EventsDto } from "../dtos/EventsDto"
import type { ITranscription } from "../interfaces/ITranscription"


export const MeetingService = (fetch: Axios) => {

    return {
        getAnalysis(meetTranscription: ITranscription, userId: string): AxiosPromise<{items: EventsDto}> {
            return fetch.post(`/calendar/event-transcript?userId=${userId}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    transcript: meetTranscription.results,
                }
            })
        }
    }
}