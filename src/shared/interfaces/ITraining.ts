export interface ITraining {
    test: {
        situation: string
        options: string[]
    }
}

export interface IOptionChoice {
    situation: string
    choseBehavior: string
}


export interface IFeedback {
    result: IFeedbackResult
}

interface IFeedbackResult {
    impulsive: number
    calm: number
    cautious: number
    indecisive: number
    aggressive: number
    pacific: number
}