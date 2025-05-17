import { Button } from "@/components/ui/button";
import type { IMeeting } from "@/shared/interfaces/IMeeting";
import type { FC } from "react";


interface IOptionsMeetingComponentProps {
    meeting: IMeeting
}


export const OptionsMeetingComponent: FC<IOptionsMeetingComponentProps> = () => {


    return (
        <div className="">
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