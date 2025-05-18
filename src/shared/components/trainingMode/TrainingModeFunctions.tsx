import { TrainingService } from "@/shared/services/TrainingService"
import { useState, useEffect } from "react"
import { CalendarClient, userClient } from "@/shared/utils/Axios"
import type { IFeedback, IOptionChoice, ITraining } from "@/shared/interfaces/ITraining"
import { ProfileService } from "@/shared/services/ProfileService"
import { LocalStorageService } from "@/shared/services/LocalStorageService"

export const useTrainingModeFunctions = () => {

    const [step, setStep] = useState(1)
    const [selectedOption, setSelectedOption] = useState<number | null>(null)
    const [scenario, setScenario] = useState<ITraining["test"] | null>(null)
    const [feedback, setFeedback] = useState<IFeedback | null>(null)

    const { getTraining, generateFeedback } = TrainingService(CalendarClient)
    const { updateXP } = ProfileService(userClient)

    const { get } = LocalStorageService()
    
    const loadScenario = () => {
        getTraining().then((response) => {
            setScenario(response.data.test)
        })
    }
    
    useEffect(() => {

        loadScenario()
    }, [])

    const translateResults = {
        impulsive: 'Impulsivo',
        calm: 'Calmo',
        cautious: 'Cauteloso',
        indecisive: 'Indeciso',
        aggressive: 'Agressivo',
        pacific: 'Pacífico',
        
    }

    const getFeedback = (userResponse: IOptionChoice) => {
        generateFeedback(userResponse).then((response) => {
            setFeedback(response.data)
        })
    }
    
    

      const handleSelectOption = (index: number) => {
        setSelectedOption(index)
        setStep(2)
        getFeedback({
            situation: scenario!.situation,
            choseBehavior: scenario!.options[index]
        })
        updateXP(get('userId')!)
      }
    

    return {
        scenario,
        feedback,
        step,
        selectedOption,
        handleSelectOption,
        setStep,
        setSelectedOption,
        translateResults
    }
}