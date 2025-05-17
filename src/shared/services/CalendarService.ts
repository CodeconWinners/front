import type { Axios, AxiosPromise } from "axios"
import type { EventsDto } from "../dtos/EventsDto"


export const CalendarService = (fetch: Axios) => {

    return {
        getEvents(date: string): AxiosPromise<{items: EventsDto[]}> {
            return fetch.get('/calendar/read-events', {
                params: {
                    // date: date,
                    userId: "8c615822-e477-4af4-90b5-3b952a086d75"
                }
            })
        }
    }
}