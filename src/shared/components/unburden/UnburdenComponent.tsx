import type { FC } from "react";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mic, Send, ThumbsUp } from "lucide-react"


export const UnburdenComponent: FC = () => {
    const [message, setMessage] = useState("")
    const [personType, setPersonType] = useState("")
    const [showResponse, setShowResponse] = useState(false)
    const [showMatureVersion, setShowMatureVersion] = useState(false)

    const handleSubmit = () => {
        if (message && personType) {
            setShowResponse(true)
        }
    }

    return (
        <div className="container p-6 max-w-3xl mx-auto">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">Desabafar</h1>
                    <p className="text-muted-foreground">Expresse-se e receba feedback construtivo</p>
                </div>

                {!showResponse ? (
                    <>
                        <Textarea
                            placeholder="O que você gostaria de expressar? Conte-nos a situação..."
                            className="min-h-[150px]"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <div className="flex justify-center">
                            <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                                <Mic className="h-6 w-6" />
                            </Button>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Selecione o tipo de pessoa</label>
                            <Select value={personType} onValueChange={setPersonType}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Escolha uma opção" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="chefe">Chefe</SelectItem>
                                    <SelectItem value="colega">Colega</SelectItem>
                                    <SelectItem value="cliente">Cliente</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button className="w-full" onClick={handleSubmit} disabled={!message || !personType}>
                            <Send className="mr-2 h-4 w-4" /> Enviar
                        </Button>
                    </>
                ) : (
                    <div className="space-y-6">
                        <Card>
                            <CardContent className="p-4 space-y-4">
                                <div className="flex justify-between items-start pt-4">
                                    <h3 className="font-medium">Sua mensagem:</h3>
                                </div>
                                <p className="text-muted-foreground">{message}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-4 space-y-4">
                                <div className="flex justify-between items-start pt-4">
                                    <h3 className="font-medium">Feedback:</h3>
                                </div>

                                {!showMatureVersion ? (
                                    <div className="space-y-4">
                                        <p>
                                            Sua mensagem parece um pouco emotiva e pode ser interpretada como uma crítica pessoal. Tente focar
                                            no problema, não na pessoa.
                                        </p>

                                        <Button variant="outline" className="w-full" onClick={() => setShowMatureVersion(true)}>
                                            Como dizer isso de forma madura?
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <p className="text-green-600 font-medium">Versão mais madura:</p>
                                        <p>
                                            "Notei que temos prazos apertados para este projeto. Gostaria de conversar sobre como podemos
                                            reorganizar as prioridades para garantir que entregamos com qualidade."
                                        </p>

                                        <div className="flex justify-end">
                                            <Button variant="outline" size="sm">
                                                <ThumbsUp className="mr-2 h-4 w-4" /> Útil
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={() => {
                                    setShowResponse(false)
                                    setShowMatureVersion(false)
                                }}
                            >
                                Novo desabafo
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
