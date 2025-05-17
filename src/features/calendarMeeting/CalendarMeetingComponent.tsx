import { CalendarComponent } from "@/shared/components/calendar/CalendarComponent";
import type { FC } from "react";
import { OptionsMeetingComponent } from "./optionsMeeting/OptionsMeetingComponent";


export const CalendarMeetingComponent: FC = () => {
    const isMeetingActionsEnabled = true;



    return (
        <>
            <CalendarComponent
                meetingIndividualActions={isMeetingActionsEnabled ? (meeting) => (
                    <OptionsMeetingComponent
                        meeting={meeting}
                    />
                 ): undefined}
            />
        </>
    )
}