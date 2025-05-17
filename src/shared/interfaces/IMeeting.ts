import type { MeetingStatusEnum } from "../enums/MeetingStatusEnum"

export interface IMeeting {
    id: string
    title: string
    description: string
    status: MeetingStatusEnum
    date: Date
    time: string
}