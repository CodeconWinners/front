import type { IMeeting } from "@/shared/interfaces/IMeeting";
import type { FC } from "react";

import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ExcuseGeneratorPopup } from "./excuseGeneratorPopup/ExcuseGeneratorPopupComponent";
import { LocalStorageService } from "@/shared/services/LocalStorageService";


interface IExcuseGeneratorComponentProps {
    meeting: IMeeting
}


export const ExcuseGeneratorComponent: FC<IExcuseGeneratorComponentProps> = ({ meeting }) => {
    const { get } = LocalStorageService()


    return (

        <Dialog>
            <DialogTrigger className="bg-yellow-400 pointer hover:bg-yellow-600 text-primary-foreground px-4 py-2 rounded-md -mb-4">Gere uma desculpa pra mim 😇</DialogTrigger>
            <ExcuseGeneratorPopup userId={get('userId')!} eventId={meeting.id} />
        </Dialog>

    )
}





