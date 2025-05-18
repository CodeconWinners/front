import { useEffect, useState } from "react"
import { MeetingService } from "@/shared/services/MeetingService"
import { CalendarClient } from "@/shared/utils/Axios"

export const useExcuseGeneratorPopupFunctions = (userId: string, eventId: string) => {
    const [excuse, setExcuse] = useState("")
    const { getExcuse } = MeetingService(CalendarClient)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        generateExcuse()
    }, [])

    async function generateExcuse() {
        setIsLoading(true)
        const response = await getExcuse(userId, eventId)
        setExcuse(response.data.message)
        setIsLoading(false)
    }


    return {
        excuse,
        isLoading
    }
}