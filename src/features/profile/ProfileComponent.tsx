import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Star, Trophy } from "lucide-react"
import type { FC } from "react"
import { useProfileFunctions } from "./ProfileFunctions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



export const ProfileComponent: FC = () => {
    const { userProfile, changedValue, loading, save } = useProfileFunctions();

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
                        <div className="flex items-center gap-1 text-amber-500">
                            <Trophy className="h-5 w-5" />
                            <span className="font-medium">Nível {userProfile.level}</span>
                        </div>
                    <div className="grid grid-cols-2 lg:grid-cols-12 md:grid-cols-12 gap-2 w-full">
                        <fieldset className="w-full text-start col-span-6">
                            <label>Nome</label>
                            <Input
                                value={userProfile.name}
                                onChange={(event) => changedValue("name", event.target.value)}
                            />
                        </fieldset>
                        <fieldset className="w-full text-start col-span-6">
                            <label>Sobrenome</label>
                            <Input
                                value={userProfile.lastName}
                                onChange={(event) => changedValue("name", event.target.value)}
                            />
                        </fieldset>
                        <fieldset className="w-full text-start col-span-6">
                            <label>email</label>
                            <Input
                                value={userProfile.email}
                                onChange={(event) => changedValue("name", event.target.value)}
                            />
                        </fieldset>
                        <fieldset className="w-full text-start col-span-6">
                            <label>Cargo</label>
                            <Input
                                value={userProfile.jobTitle}
                                onChange={(event) => changedValue("name", event.target.value)}
                            />
                        </fieldset>
                        <fieldset className="w-full text-start col-span-6">
                            <label>Descrição</label>
                            <Input
                                value={userProfile.jobDescription}
                                onChange={(event) => changedValue("name", event.target.value)}
                            />
                        </fieldset>

                    </div>
                </div>

                <Card>
                    <CardContent className="p-4 space-y-3">
                        <div className="flex justify-between">
                            <h3 className="font-medium">XP acumulado</h3>
                            <span>
                                {userProfile.totalXp} / {userProfile.nextLevelXp}
                            </span>
                        </div>
                        <Progress value={(userProfile.totalXp / 5000) * 100} className="h-2" />
                    </CardContent>
                </Card>


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
            <div className="mt-6">
                <Button variant={"default"} onClick={save} disabled={loading ? true : false}>
                    {loading ? (
                        <>
                            salvando
                        </>
                    ) : (
                        <>
                            Salvar
                        </>
                    )}
                </Button>
            </div>
        </div>
    )
}
