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
import { Loader2 } from "lucide-react";


interface AnalyzePopupComponentProps {
    meeting: IMeeting
}

export const AnalyzePopupComponent: FC<AnalyzePopupComponentProps> = ({ meeting }) => {
    const { getStatusColor, getAnalysis, transcription, setTranscription, analysis, isLoading, getRaitingName } = useAnalyzePopupFunctions();

    return (
        <DialogContent className="max-w-[90vw] max-h-[90vh] flex flex-col gap-4">
            <DialogHeader>
                <DialogTitle>{meeting.title}</DialogTitle>
                <div className="flex justify-between">
                    <p><strong>Horário:</strong> {meeting.time}</p>
                    <p><strong>Avaliação IA:</strong> <Badge className={getStatusColor(meeting.rating)}>{getRaitingName(meeting.rating)}</Badge></p>
                </div>
                <DialogDescription>
                    <span className="font-medium mb-2">Descrição</span>
                    <span>{meeting.description}</span>
                </DialogDescription>
            </DialogHeader>
            <div className="mt-8">
                <Textarea className="h-[150px] resize-none" value={transcription || ""} onChange={(e) => setTranscription(e.target.value)} placeholder="Cole a Transcrição da Reunião Aqui..." />
            </div>
            <div className="flex flex-col gap-4 mb-8">
                <Button variant="default" onClick={() =>transcription && getAnalysis(transcription, meeting.id)}>Analizar Reunião</Button>
                {isLoading && (
                    <div className="flex justify-center items-center">
                        <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                )}
                {analysis && (
                <div className="h-[350px] rounded-md border border-gray-200 p-4">   
                        <h4 className="font-medium mb-2">Resultado da Análise</h4>
                        <p>{analysis}</p>
                    </div>
                )}
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline">Fechar</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    )
}
