import { Button } from "@/components/ui/button";
import type { IMeeting } from "@/shared/interfaces/IMeeting";
import type { FC } from "react";


interface IOptionsMeetingComponentProps {
    meeting: IMeeting
}


export const OptionsMeetingComponent: FC<IOptionsMeetingComponentProps> = () => {


    return (
        <div className="flex flex-row gap-2">
            <Button variant={"default"}>
                Aceitar 
            </Button>
            <Button variant={"ghost"}>
                Talvez
            </Button>
            <Button variant={"destructive"}>
                Não
            </Button>
        </div>
    )
}