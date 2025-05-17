import type { FC } from "react";
import { Button } from "@/components/ui/button"
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import type { IMeeting } from "@/shared/interfaces/IMeeting";
import { Badge } from "@/components/ui/badge";
import { useAnalyzePopupFunctions } from "./AnalyzePopup.Functions";
import { Textarea } from "@/components/ui/textarea"


interface AnalyzePopupComponentProps {
    meeting: IMeeting
}

export const AnalyzePopupComponent: FC<AnalyzePopupComponentProps> = ({ meeting }) => {
    const { getStatusColor } = useAnalyzePopupFunctions();
    return (
        <DialogContent className="max-w-[90vw] max-h-[90vh] flex flex-col gap-4">
            <DialogHeader>
                <DialogTitle>{meeting.title}</DialogTitle>
                <div className="flex justify-between">
                    <p><strong>Horário:</strong> {meeting.time}</p>
                    <p><strong>Status:</strong> <Badge className={getStatusColor(meeting.rating)}>{meeting.rating}</Badge></p>
                </div>
                <DialogDescription>
                    <div>
                        <h4 className="font-medium mb-2">Descrição</h4>
                        <p>{meeting.description}</p>
                    </div>
                </DialogDescription>
            </DialogHeader>
            <div className="mt-8">
                <Textarea className="h-[150px] resize-none"  placeholder="Cole a Transcrição da Reunião Aqui..." />
            </div>
            <div className="flex flex-col gap-4 mb-8">
                <div className="h-[350px] rounded-md border border-gray-200 p-4">
                    <h4 className="font-medium mb-2">Resultado da Análise</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
                
                
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline">Fechar</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    )
}
