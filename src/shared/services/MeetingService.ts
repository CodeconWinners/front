import type { Axios, AxiosPromise } from "axios"
import type { EventsDto } from "../dtos/EventsDto"
import type { ITranscription } from "../interfaces/ITranscription"


export const MeetingService = (fetch: Axios) => {

    return {
        getAnalysis(meetTranscription: ITranscription): AxiosPromise<{items: EventsDto}> {
            return fetch.post('/calendar/event-transcript?userId=c4b22529-81bf-473b-8336-bac6151c9df7&eventId=6op66o9jckr6abb66oq68b9kcco30bb275j36b9n6hij0eb6c9hmaeb4cc_20250507', {
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