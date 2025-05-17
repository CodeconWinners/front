import type { Axios, AxiosPromise } from "axios"
import type { EventsDto } from "../dtos/EventsDto"


export const CalendarService = (fetch: Axios) => {

    return {
        getEvents(date: string): AxiosPromise<{itens: EventsDto[]}> {
            return fetch.get('/calendar/read-events', {
                params: {
                    date: date,
                    userId: "abdshvahdvvbdas"
                }
            })
        }
    }
}