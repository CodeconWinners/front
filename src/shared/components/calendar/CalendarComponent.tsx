import type { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCalendarFunctions } from "./CalendarFunctions";
import { cn } from "@/lib/utils";
import { OptionsMeetingComponent } from "@/features/calendarMeeting/optionsMeeting/OptionsMeetingComponent";
import type { IMeeting } from "@/shared/interfaces/IMeeting";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { AnalyzePopupComponent } from "../analyzePopup/AnalyzePopupComponent";




export const CalendarComponent: FC = () => {
    const {
        currentMonth,
        getStatusColor,
        selectedDate,
        getDayStatus,
        getStatusIndicatorColor,
        prevMonth,
        setSelectedDate,
        monthData,
        nextMonth,
        weekDays,
        filteredMeetings,
        formatDate,
        hasMeetings
    } = useCalendarFunctions();

        const isMeetingActionsEnabled = true;


    return (
        <div className="container p-6 max-w-6xl mx-auto">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">Calendário de Reuniões</h1>
                    <p className="text-muted-foreground">Visualize e avalie suas reuniões</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <Card>
                            <CardContent className="p-4">
                                {/* Cabeçalho do calendário */}
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-semibold">
                                        {currentMonth.toLocaleString("pt-BR", { month: "long", year: "numeric" })}
                                    </h2>
                                    <div className="flex space-x-2">
                                        <Button variant="outline" size="icon" onClick={prevMonth}>
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon" onClick={nextMonth}>
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Dias da semana */}
                                <div className="grid grid-cols-7 gap-1 mb-2">
                                    {weekDays.map((day) => (
                                        <div key={day} className="text-center font-medium text-sm py-2">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                {/* Dias do mês */}
                                <div className="grid grid-cols-7 gap-1">
                                    {monthData.map((day, index) => {
                                        const isSelected =
                                            selectedDate &&
                                            day.date.getDate() === selectedDate.getDate() &&
                                            day.date.getMonth() === selectedDate.getMonth() &&
                                            day.date.getFullYear() === selectedDate.getFullYear()

                                        const dayStatus = getDayStatus(day.date)
                                        const statusColor = getStatusIndicatorColor(dayStatus)
                                        const hasIndicator = hasMeetings(day.date)

                                        return (
                                            <button
                                                key={index}
                                                className={cn(
                                                    "h-20 p-1 border rounded-md flex flex-col relative",
                                                    day.isCurrentMonth ? "bg-background" : "bg-muted/30 text-muted-foreground",
                                                    isSelected && "ring-2 ring-primary",
                                                    day.isToday && "border-primary",
                                                )}
                                                onClick={() => setSelectedDate(day.date)}
                                            >
                                                <span
                                                    className={cn(
                                                        "text-sm self-end px-2 rounded-full",
                                                        day.isToday && "bg-primary text-primary-foreground",
                                                    )}
                                                >
                                                    {day.date.getDate()}
                                                </span>

                                                {hasIndicator && (
                                                    <div className="mt-auto flex flex-wrap gap-1 justify-center">
                                                        <div className={cn("w-3 h-3 rounded-full", statusColor)}></div>
                                                    </div>
                                                )}
                                            </button>
                                        )
                                    })}
                                </div>

                                {/* Legenda */}
                                <div className="mt-4 flex flex-wrap gap-3">
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <span className="text-xs">MUITO ÚTIL</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                        <span className="text-xs">ÚTIL</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                        <span className="text-xs">INÚTIL</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <span className="text-xs">IMPRATICÁVEL</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:col-span-1">
                        <Card className="h-full">
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-semibold">
                                        {selectedDate ? formatDate(selectedDate) : "Selecione uma data"}
                                    </h2>
                                    <Button size="icon" variant="outline">
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>

                                {filteredMeetings.length > 0 ? (
                                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                                        {filteredMeetings.map((meeting) => (
                                            <Dialog key={meeting.id}>
                                                <DialogTrigger asChild>
                                                    <Card className="border shadow-sm hover:bg-accent/50 cursor-pointer transition-colors">
                                                        <CardContent className="p-4">
                                                            <div className="flex flex-col space-y-2">
                                                                <div className="flex justify-between items-start">
                                                                    <h3 className="font-medium">{meeting.title}</h3>
                                                                    <Badge className={getStatusColor(meeting.rating)}>{meeting.rating}</Badge>
                                                                </div>
                                                                <p className="text-sm text-muted-foreground">{meeting.time}</p>
                                                                <p className="text-sm">{meeting.description}</p>
                                                            </div>
                                                       {isMeetingActionsEnabled && (
                                                        <OptionsMeetingComponent
                                                            meeting={meeting}
                                                        />
                                                    )}
                                                        </CardContent>
                                                    </Card>
                                                </DialogTrigger>

                                                <AnalyzePopupComponent meeting={meeting} />
                                            </Dialog>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-[300px] text-center">
                                        <p className="text-muted-foreground mb-4">Nenhuma reunião agendada para esta data.</p>
                                        <Button variant="outline">
                                            <Plus className="h-4 w-4 mr-2" />
                                            Adicionar reunião
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}