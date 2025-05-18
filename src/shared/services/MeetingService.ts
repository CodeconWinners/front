import type { Axios, AxiosPromise } from "axios"
import type { EventsDto } from "../dtos/EventsDto"
import type { ITranscription } from "../interfaces/ITranscription"
import type { IExcuseGeneratorResponse } from "../interfaces/IExcuseGenerator"

export const MeetingService = (fetch: Axios) => {

    return {
        getAnalysis(meetTranscription: ITranscription, userId: string, eventId: string): AxiosPromise<{items: EventsDto}> {
            return fetch.post(`/calendar/event-transcript?userId=${userId}&eventId=${eventId}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    transcript: meetTranscription.results,
                }
            })
        },

        getExcuse(userId: string, eventId: string): AxiosPromise<IExcuseGeneratorResponse> {
            return fetch.get(`/calendar/excuse-generator?userId=${userId}&eventId=${eventId}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
        }
    }
}