import type { EventsDto } from "@/shared/dtos/EventsDto"
import { MeetingStatusEnum } from "@/shared/enums/MeetingStatusEnum"
import { RaitingMeetingEnum } from "@/shared/enums/RaitingMeetingEnum"
import type { IMeeting } from "@/shared/interfaces/IMeeting"
import { CalendarService } from "@/shared/services/CalendarService"
import { LocalStorageService } from "@/shared/services/LocalStorageService"
import { CalendarClient } from "@/shared/utils/Axios"
import { sanetizeText } from "@/shared/utils/sanetizeText"
// import { CalendarService } from "@/shared/services/CalendarService"
import { format } from 'date-fns'
import { useEffect, useState } from "react"

export const useCalendarFunctions = () => {

    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
    const [meetingData, setMeetingData] = useState<IMeeting[]>([]);
    const actualDate = () => {
        const date = new Date();
        return format(date, 'yyyy-MM')
    }

    const { getEvents } = CalendarService(CalendarClient);
    const { get } = LocalStorageService();

    useEffect(() => {
        loadingMeetings(actualDate())
    }, [])

    const loadingMeetings = (date: string) => {
        const userId = get("userId");
        if (userId) {
            getEvents(date, "c4b22529-81bf-473b-8336-bac6151c9df7")
                .then((response) => {
                    setMeetingData(formatCalendar(response.data.items))
                })
        }
    }

    const formatCalendar = (data: EventsDto[]): IMeeting[] => {
        return data.map((value) => {
            return {
                id: value.id,
                title: value.details.title,
                description: value.details.description,
                status: value.details.status,
                rating: value.details.transcriptionRating,
                date: new Date(value.details.date),
                time: value.details.time,
                predictionMessage: value.details.predictionMessage || "",
                transcriptionMessage: value.details.transcriptionMessage || "",
                predictionRating: value.details.predictionRating || null,
                transcriptionRating: value.details.transcriptionRating || null
            }
        })
    }

    const getRatingColor = (status: RaitingMeetingEnum) => {
        switch (status) {
            case RaitingMeetingEnum.MUITO_UTIL:
                return "bg-green-500"
            case RaitingMeetingEnum.UTIL:
                return "bg-blue-500"
            case RaitingMeetingEnum.INUTIL:
                return "bg-amber-500"
            case RaitingMeetingEnum.IMPRATICAVEL:
                return "bg-red-500"
            default:
                return "bg-gray-500"
        }
    }

    const getStatusName = (status: MeetingStatusEnum): string => {
        if (!status) return "";

        switch (status) {
            case MeetingStatusEnum.CONFIRMED:
                return "Confirmado"
            case MeetingStatusEnum.TENTATIVE:
                return "Talvez"
            case MeetingStatusEnum.DECLINED:
                return "Cancelado"
        }
    }

    const getStatusColor = (status: MeetingStatusEnum | null) => {
        if (!status) return ""

        switch (status) {
            case MeetingStatusEnum.CONFIRMED:
                return "bg-green-500"
            case MeetingStatusEnum.TENTATIVE:
                return "bg-amber-500"
            case MeetingStatusEnum.DECLINED:
                return "bg-red-500"
            default:
                return ""
        }
    }


    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate()
    }

    const getFirstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay()
    }

    const getMonthData = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const daysInMonth = getDaysInMonth(year, month)
        const firstDayOfMonth = getFirstDayOfMonth(year, month)
        const days = []

        // Dias do mês anterior
        const prevMonthDays = getDaysInMonth(year, month - 1)
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
            days.push({
                date: new Date(year, month - 1, prevMonthDays - i),
                isCurrentMonth: false,
                isToday: false,
            })
        }

        // Dias do mês atual
        const today = new Date()
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month, i)
            days.push({
                date,
                isCurrentMonth: true,
                isToday: i === today.getDate() && month === today.getMonth() && year === today.getFullYear(),
            })
        }

        // Dias do próximo mês
        const remainingDays = 42 - days.length // 6 semanas * 7 dias = 42
        for (let i = 1; i <= remainingDays; i++) {
            days.push({
                date: new Date(year, month + 1, i),
                isCurrentMonth: false,
                isToday: false,
            })
        }

        return days
    }

    const monthData = getMonthData(currentMonth)


    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
    }

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
    }

    const filteredMeetings = selectedDate
        ? meetingData.filter(
            (meeting) =>
                meeting.date.getDate() === selectedDate.getDate() &&
                meeting.date.getMonth() === selectedDate.getMonth() &&
                meeting.date.getFullYear() === selectedDate.getFullYear(),
        )
        : []

    // Verifica se um dia tem reuniões
    const hasMeetings = (date: Date) => {
        return meetingData.some(
            (meeting) =>
                meeting.date.getDate() === date.getDate() &&
                meeting.date.getMonth() === date.getMonth() &&
                meeting.date.getFullYear() === date.getFullYear(),
        )
    }


    const getDayStatus = (date: Date): MeetingStatusEnum | null => {
        const dayMeetings = meetingData.filter(
            (meeting) =>
                meeting.date.getDate() === date.getDate() &&
                meeting.date.getMonth() === date.getMonth() &&
                meeting.date.getFullYear() === date.getFullYear(),
        )

        if (dayMeetings.length === 0) return null

        // Prioridade: MUITO ÚTIL > ÚTIL > INÚTIL > IMPRATICÁVEL
        if (dayMeetings.some((m) => m.status === MeetingStatusEnum.CONFIRMED)) return MeetingStatusEnum.CONFIRMED;
        if (dayMeetings.some((m) => m.status === MeetingStatusEnum.DECLINED)) return MeetingStatusEnum.DECLINED;
        if (dayMeetings.some((m) => m.status === MeetingStatusEnum.TENTATIVE)) return MeetingStatusEnum.TENTATIVE;

        return null
    }

    const getDayPredictionRating = (date: Date): RaitingMeetingEnum | null => {
        const dayMeetings = meetingData.filter(
            (meeting) =>
                meeting.date.getDate() === date.getDate() &&
                meeting.date.getMonth() === date.getMonth() &&
                meeting.date.getFullYear() === date.getFullYear(),
        )

        if (dayMeetings.length === 0) return null

        // Prioridade: MUITO ÚTIL > ÚTIL > INÚTIL > IMPRATICÁVEL
        if (dayMeetings.some((m) => m.predictionRating === RaitingMeetingEnum.MUITO_UTIL)) return RaitingMeetingEnum.MUITO_UTIL;
        if (dayMeetings.some((m) => m.predictionRating === RaitingMeetingEnum.UTIL)) return RaitingMeetingEnum.UTIL;
        if (dayMeetings.some((m) => m.predictionRating === RaitingMeetingEnum.INUTIL)) return RaitingMeetingEnum.INUTIL;
        if (dayMeetings.some((m) => m.predictionRating === RaitingMeetingEnum.IMPRATICAVEL)) return RaitingMeetingEnum.IMPRATICAVEL;

        return null
    }


    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat("pt-BR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(date)
    }

    const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];


    const sanitize = (text: string) => {
        return sanetizeText(text)
    }

    return {
        currentMonth,
        selectedDate,
        weekDays,
        monthData,
        filteredMeetings,
        prevMonth,
        nextMonth,
        getDayStatus,
        getDayPredictionRating,
        getRatingColor,
        getStatusColor,
        setSelectedDate,
        hasMeetings,
        formatDate,
        sanitize,
        getStatusName
    }
}