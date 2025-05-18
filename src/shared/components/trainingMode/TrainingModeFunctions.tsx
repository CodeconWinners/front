import { TrainingService } from "@/shared/services/TrainingService"
import { useState, useEffect } from "react"
import { CalendarClient } from "@/shared/utils/Axios"
import type { ITraining } from "@/shared/interfaces/ITraining"

export const useTrainingModeFunctions = () => {

    const [step, setStep] = useState(1)
    const [selectedOption, setSelectedOption] = useState<number | null>(null)
    const [scenario, setScenario] = useState<ITraining["test"] | null>(null)

    const { getTraining } = TrainingService(CalendarClient)

    // const scenario = {
    //     situation:
    //       "Seu chefe te sobrecarregou com mais um projeto, mesmo sabendo que você já está com muitas tarefas. E agora?",
    //     options: [
    //       "Aceito sem questionar, não quero criar problemas.",
    //       "Explico educadamente que já estou com muitas tarefas e peço para priorizar.",
    //       "Digo que é impossível e que ele precisa encontrar outra pessoa.",
    //     ],
    //   }

    
    const loadScenario = () => {
        getTraining().then((response) => {
            setScenario(response.data.test)
        })
    }
    
    useEffect(() => {

        loadScenario()
    }, [])
    
      
    
      const feedback = {
        1: {
          reaction: "Você evitou o conflito, mas isso pode levar a burnout e ressentimento.",
          scores: { assertividade: 20, empatia: 70, clareza: 50 },
        },
        2: {
          reaction: "Ótima abordagem! Você foi assertivo sem ser agressivo e propôs uma solução.",
          scores: { assertividade: 90, empatia: 85, clareza: 95 },
        },
        3: {
          reaction: "Sua mensagem é clara, mas pode soar confrontativa e não oferece soluções.",
          scores: { assertividade: 75, empatia: 30, clareza: 80 },
        },
      }

      const handleSelectOption = (index: number) => {
        setSelectedOption(index)
        setStep(2)
      }
    

    return {
        scenario,
        feedback,
        step,
        selectedOption,
        handleSelectOption,
        setStep,
        setSelectedOption
    }
}