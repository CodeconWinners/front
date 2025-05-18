import { RaitingMeetingEnum } from "@/shared/enums/RaitingMeetingEnum"
import type { ITranscription } from "@/shared/interfaces/ITranscription"
import { LocalStorageService } from "@/shared/services/LocalStorageService"
import { MeetingService } from "@/shared/services/MeetingService"
import { CalendarClient } from "@/shared/utils/Axios"
import { useState } from "react"
import { toast } from "react-toastify"

export const useAnalyzePopupFunctions = () => {

    const [transcription, setTranscription] = useState<string | null>(null);
    const [analysis, setAnalysis] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {get} = LocalStorageService();

    const getStatusColor = (status: RaitingMeetingEnum) => {
        switch (status) {
            case RaitingMeetingEnum.MUITO_UTIL:
                return "bg-green-500 hover:bg-green-600"
            case RaitingMeetingEnum.UTIL:
                return "bg-blue-500 hover:bg-blue-600"
            case RaitingMeetingEnum.INUTIL:
                return "bg-amber-500 hover:bg-amber-600"
            case RaitingMeetingEnum.IMPRATICAVEL:
                return "bg-red-500 hover:bg-red-600"
            default:
                return "bg-gray-500 hover:bg-gray-600"
        }
    }

    const getAnalysis = async (meetTranscription: string) => {
        const transcriptionParsed = JSON.parse(meetTranscription) as ITranscription
        setIsLoading(true)
        const userId = get("userId");
        if(userId) {
            const response = await MeetingService(CalendarClient).getAnalysis(transcriptionParsed,userId);
            setAnalysis(response.data.items.details.transcriptionMessage)
        }else {
            toast.error("Ops, acho que não conseguimos fazer a transcrição no momento!!!!")
        }
        setIsLoading(false)
    }

    return {
        getStatusColor,
        getAnalysis,
        transcription,
        setTranscription,
        analysis,
        isLoading
    }
}