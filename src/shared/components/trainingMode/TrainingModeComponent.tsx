import type { FC } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Award } from "lucide-react"
import { useTrainingModeFunctions } from "./TrainingModeFunctions"

export const TrainingModeComponent: FC = () => {

  const { scenario, feedback, step, selectedOption, handleSelectOption, setStep, setSelectedOption, translateResults } = useTrainingModeFunctions()

  
    return (
        <div className="container p-6 max-w-3xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Treino de Confronto</h1>
          <p className="text-muted-foreground">Pratique situações difíceis do trabalho</p>
        </div>

        {step === 1 ? (
          <div className="space-y-6">
            <Card>
              <CardContent className="p-4">
                <h2 className="font-medium mb-2">Situação:</h2>
                <p>{scenario && scenario.situation}</p>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <h3 className="font-medium">Escolha sua resposta:</h3>
              {scenario && scenario.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start h-auto p-4 text-left whitespace-pre-wrap"
                  onClick={() => handleSelectOption(index)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <Card>
              <CardContent className="p-4">
                <h2 className="font-medium mb-2">Sua escolha:</h2>
                <p>{selectedOption !== null && scenario && scenario.options[selectedOption]}</p>
              </CardContent>
            </Card>

            {/* <Card>
              <CardContent className="p-4">
                <h2 className="font-medium mb-2">Reação da IA:</h2>
                <p>{selectedOption !== null && feedback[(selectedOption + 1) as keyof typeof feedback].reaction}</p>
              </CardContent>
            </Card> */}

            <div className="space-y-4">
              <h3 className="font-medium flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Suas notas:
              </h3>

              <div className="space-y-3">
                {(feedback &&selectedOption !== null) &&
                  Object.entries(feedback.result).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="capitalize">{translateResults[key as keyof typeof translateResults]}</span>
                        <span>{value}/100</span>
                      </div>
                      <Progress value={value} className="h-2" />
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setStep(1)
                  setSelectedOption(null)
                }}
              >
                Novo treino
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    )
}
