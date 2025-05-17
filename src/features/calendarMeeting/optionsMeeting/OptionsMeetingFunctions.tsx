import { RaitingMeetingEnum } from "@/shared/enums/RaitingMeetingEnum"



export const OptionsMeetingFunctions = () => {

    const getStatusColor = (status: RaitingMeetingEnum) => {
        switch (status) {
            case RaitingMeetingEnum.MUITO_UTIL:
                return "bg-green-200 hover:bg-green-300"
            case RaitingMeetingEnum.UTIL:
                return "bg-blue-200 hover:bg-blue-300"
            case RaitingMeetingEnum.INUTIL:
                return "bg-amber-200 hover:bg-amber-300"
            case RaitingMeetingEnum.IMPRATICAVEL:
                return "bg-red-200 hover:bg-red-300"
            default:
                return "bg-gray-200 hover:bg-gray-300"
        }
    }

    const getStatusIndicatorColor = (status: RaitingMeetingEnum | null) => {
        if (!status) return ""

        switch (status) {
            case RaitingMeetingEnum.MUITO_UTIL:
                return "bg-green-200"
            case RaitingMeetingEnum.UTIL:
                return "bg-blue-200"
            case RaitingMeetingEnum.INUTIL:
                return "bg-amber-200"
            case RaitingMeetingEnum.IMPRATICAVEL:
                return "bg-red-200"
            default:
                return ""
        }
    }

    return {
        getStatusColor,
        getStatusIndicatorColor
    }
}