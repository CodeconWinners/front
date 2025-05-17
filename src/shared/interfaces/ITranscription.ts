export interface ITranscription {
    results: IInterationMeeting[]
}

interface IInterationMeeting {
    speaker: string
    content: string
    timeInSeconds: number
}
