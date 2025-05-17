import type { Axios, AxiosPromise } from "axios"
import type { EventsDto } from "../dtos/EventsDto"
import type { ITranscription } from "../interfaces/ITranscription"


export const MeetingService = (fetch: Axios) => {

    return {
        getAnalysis(meetTranscription: ITranscription): AxiosPromise<{items: EventsDto}> {
            return fetch.post('/calendar/event-transcript?userId=8c615822-e477-4af4-90b5-3b952a086d75&eventId=6op66o9jckr6abb66oq68b9kcco30bb275j36b9n6hij0eb6c9hmaeb4cc_20250507', {
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