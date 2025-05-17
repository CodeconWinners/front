import type { IMeeting } from "@/shared/interfaces/IMeeting";
import type { FC } from "react";
import { OptionsMeetingFunctions } from "./OptionsMeetingFunctions";
import { RaitingMeetingEnum } from "@/shared/enums/RaitingMeetingEnum";
import { Separator } from "@/components/ui/separator";

interface IOptionsMeetingComponentProps {
    meeting: IMeeting
}


export const OptionsMeetingComponent: FC<IOptionsMeetingComponentProps> = ({ meeting }) => {

    const { getStatusColor } = OptionsMeetingFunctions();

    return (
        <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">
                Previsão dessa reunião
            </p>
            <p className={`${getStatusColor(meeting.predictionRating || RaitingMeetingEnum.MUITO_UTIL)} p-2 rounded-md`}>
                {meeting.predictionMessage}
            </p>
            <Separator />
            {meeting.transcriptionMessage && (
                <>
                    <p className="text-sm font-semibold">
                        Resultado da reunião
                    </p>
                    <p className={`${getStatusColor(meeting.transcriptionRating || RaitingMeetingEnum.MUITO_UTIL)} p-2 rounded-md`}>
                        {meeting.transcriptionMessage}
                    </p>
                </>
            )}
        </div>
    )
}