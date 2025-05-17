import type { MeetingStatusEnum } from "../enums/MeetingStatusEnum";
import type { RaitingMeetingEnum } from "../enums/RaitingMeetingEnum";

export interface EventsDto {
    id: string,
    details: {
        title: string,
        date: Date,
        time: string, //"10:00"
        duration: number, // 60 in seconds
        description: string,
        predictionMessage: string, // message to show on the AI expectation of the meeting
        transcriptionMessage: string, // message to show the AI understanding of the transcript
        predictionRating: RaitingMeetingEnum,
        transcriptionRating: RaitingMeetingEnum,
        status: MeetingStatusEnum,
    }
}