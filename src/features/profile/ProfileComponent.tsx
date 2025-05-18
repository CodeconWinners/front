import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Award, Star, Trophy } from "lucide-react"
import type { FC } from "react"
import { useProfileFunctions } from "./ProfileFunctions"



export const ProfileComponent: FC = () => {
    const { userProfile } = useProfileFunctions();


    return (
        <div className="container p-6 max-w-3xl mx-auto">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">Meu Perfil</h1>
                    <p className="text-muted-foreground">Acompanhe seu progresso</p>
                </div>

                <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-3xl">👩‍💼</span>
                    </div>
                    <h2 className="text-xl font-bold">{userProfile.name}</h2>
                    <div className="flex items-center gap-1 text-amber-500">
                        <Trophy className="h-5 w-5" />
                        <span className="font-medium">Nível {userProfile.level}</span>
                    </div>
                </div>

                <Card>
                    <CardContent className="p-4 space-y-3">
                        <div className="flex justify-between">
                            <h3 className="font-medium">XP acumulado</h3>
                            <span>
                                {userProfile.xp} / {userProfile.nextLevelXp}
                            </span>
                        </div>
                        <Progress value={(userProfile.xp / userProfile.nextLevelXp) * 100} className="h-2" />
                        <p className="text-xs text-muted-foreground text-center">
                            Faltam {userProfile.nextLevelXp - userProfile.xp} XP para o próximo nível
                        </p>
                    </CardContent>
                </Card>

                <div className="space-y-3">
                    <h3 className="font-medium flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Badges conquistadas
                    </h3>

                    <div className="grid grid-cols-1 gap-3">
                        {userProfile.badges && (
                            <>
                                {userProfile.badges.map((badge, index) => (
                                    <Card key={index}>
                                        <CardContent className="p-4 flex items-center gap-3">
                                            <div className="bg-primary/10 p-2 rounded-full">{badge.icon}</div>
                                            <div>
                                                <h4 className="font-medium">{badge.name}</h4>
                                                <p className="text-xs text-muted-foreground">{badge.description}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </>
                        )}
                    </div>
                </div>

                <Card>
                    <CardContent className="p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Star className="h-5 w-5 text-amber-500" />
                            <h3 className="font-medium">Ranking</h3>
                        </div>
                        <span className="text-xl font-bold">#{userProfile.ranking}</span>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
