import type { Axios, AxiosPromise } from "axios"
import type { EventsDto } from "../dtos/EventsDto"


export const CalendarService = (fetch: Axios) => {

    return {
        getEvents(_date: string, userId: string): AxiosPromise<{items: EventsDto[]}> {
            return fetch.get('/calendar/read-events', {
                params: {
                    userId: userId
                }
            })
        }
    }
}