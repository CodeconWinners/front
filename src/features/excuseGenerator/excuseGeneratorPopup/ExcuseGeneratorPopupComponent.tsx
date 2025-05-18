import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DialogContent } from "@/components/ui/dialog";
import type { FC } from "react";
import { useExcuseGeneratorPopupFunctions } from "./excuseGeneratorPopupFunctions";
interface IExcuseGeneratorPopupProps {
    userId: string
    eventId: string
}

export const ExcuseGeneratorPopup: FC<IExcuseGeneratorPopupProps> = ({ userId, eventId }) => {
    const { excuse, isLoading } = useExcuseGeneratorPopupFunctions(userId, eventId);

    return (
        <DialogContent>
                <DialogHeader>
                    {isLoading ? (
                        <DialogTitle>Gerando desculpa 😇...</DialogTitle>
                    ) : (
                        <>
                            <DialogTitle className="text-3xl">Aqui está sua desculpa</DialogTitle>
                            <DialogDescription className="text-2xl">
                                {excuse}    
                            </DialogDescription>
                        </>
                    )}
                </DialogHeader>
            </DialogContent>
    )
}