import type { FC } from "react";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Clock, ThumbsDown } from "lucide-react"


export const AnalyzeMeetingComponent: FC = () => {

    const [transcript, setTranscript] = useState("")
    const [showAnalysis, setShowAnalysis] = useState(false)

    const handleSubmit = () => {
        if (transcript) {
            setShowAnalysis(true)
        }
    }

    return (
        <div className="container p-6 max-w-3xl mx-auto">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">Analisar Reunião</h1>
                    <p className="text-muted-foreground">Descubra se sua reunião valeu a pena</p>
                </div>

                {!showAnalysis ? (
                    <>
                        <p className="text-muted-foreground">Cole o texto ou transcrição da sua reunião para análise</p>

                        <Textarea
                            placeholder="Cole aqui a transcrição da reunião..."
                            className="min-h-[200px]"
                            value={transcript}
                            onChange={(e) => setTranscript(e.target.value)}
                        />

                        <Button className="w-full" onClick={handleSubmit} disabled={!transcript}>
                            <Send className="mr-2 h-4 w-4" /> Analisar
                        </Button>
                    </>
                ) : (
                    <div className="space-y-6">
                        <Card className="bg-red-50 border-red-200">
                            <CardContent className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <ThumbsDown className="h-5 w-5 text-red-500" />
                                    <span className="font-medium">Podia ser um e-mail</span>
                                </div>
                                <Clock className="h-5 w-5 text-red-500" />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-4 space-y-4">
                                <h3 className="font-medium">Resumo engraçado:</h3>
                                <p>
                                    45 minutos de "vamos alinhar expectativas" que resultaram em mais 3 reuniões marcadas. João falou por
                                    20 minutos sobre um problema que ninguém entendeu, e Maria passou metade do tempo no mudo.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-4 space-y-4">
                                <h3 className="font-medium">Dicas para reuniões futuras:</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Defina uma pauta clara antes da reunião</li>
                                    <li>Limite o tempo de fala para cada participante</li>
                                    <li>Termine com ações claras e responsáveis definidos</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={() => {
                                    setShowAnalysis(false)
                                }}
                            >
                                Nova análise
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
