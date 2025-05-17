import type { MeetingStatusEnum } from "../enums/MeetingStatusEnum"
import type { RaitingMeetingEnum } from "../enums/RaitingMeetingEnum"

export interface IMeeting {
    id: string
    title: string
    description: string
    status: MeetingStatusEnum,
    rating: RaitingMeetingEnum,
    date: Date
    time: string
}