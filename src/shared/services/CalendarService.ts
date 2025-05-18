import type { Axios, AxiosPromise } from "axios"
import type { EventsDto } from "../dtos/EventsDto"


export const CalendarService = (fetch: Axios) => {

    return {
        getEvents(_date: string): AxiosPromise<{items: EventsDto[]}> {
            return fetch.get('/calendar/read-events', {
                params: {
                    // date: date,
                    userId: "c4b22529-81bf-473b-8336-bac6151c9df7"
                    // 8c615822-e477-4af4-90b5-3b952a086d75
                    // b8bcbbae-3d9b-4e08-8622-b371cae05a80
                }
            })
        }
    }
}