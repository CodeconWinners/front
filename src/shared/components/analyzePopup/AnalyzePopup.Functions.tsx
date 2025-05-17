import { RaitingMeetingEnum } from "@/shared/enums/RaitingMeetingEnum"

export const useAnalyzePopupFunctions = () => {

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

    return {
        getStatusColor
    }
}