import { MeetingStatusEnum } from "@/shared/enums/MeetingStatusEnum";
import { RaitingMeetingEnum } from "@/shared/enums/RaitingMeetingEnum";
import type { IMeeting } from "@/shared/interfaces/IMeeting";

export const MeetingsMock: IMeeting[] = [
    {
        id: "1",
        title: "Planejamento Semanal",
        description: "Revisão das tarefas da semana e definição de prioridades",
        status: MeetingStatusEnum.CONFIRMED,
        rating: RaitingMeetingEnum.UTIL,
        date: new Date(2025, 4, 15),
        time: "10:00",
    },
    {
        id: "2",
        title: "Alinhamento de Projeto",
        description: "Discussão sobre o andamento do projeto X e próximos passos",
        status: MeetingStatusEnum.CONFIRMED,
                rating: RaitingMeetingEnum.MUITO_UTIL,
        date: new Date(2025, 4, 15),
        time: "14:00",
    },
    {
        id: "3",
        title: "Café Virtual",
        description: "Momento de descontração com a equipe",
        status: MeetingStatusEnum.CONFIRMED,
        rating: RaitingMeetingEnum.INUTIL,
        date: new Date(2025, 4, 16),
        time: "15:30",
    },
    {
        id: "4",
        title: "Apresentação de Resultados",
        description: "Apresentação dos resultados do trimestre para toda a empresa",
        status: MeetingStatusEnum.CONFIRMED,
        rating: RaitingMeetingEnum.IMPRATICAVEL,
        date: new Date(2025, 4, 17),
        time: "09:00",
    },
    {
        id: "5",
        title: "Brainstorming",
        description: "Sessão de ideias para o novo produto",
        status: MeetingStatusEnum.CONFIRMED,
        rating: RaitingMeetingEnum.IMPRATICAVEL,
        date: new Date(2025, 4, 18),
        time: "11:00",
    },
    {
        id: "6",
        title: "Revisão de Código",
        description: "Revisão do código da nova funcionalidade",
        status: MeetingStatusEnum.CONFIRMED,
        rating: RaitingMeetingEnum.INUTIL,
        date: new Date(2025, 4, 20),
        time: "13:00",
    },
    {
        id: "7",
        title: "Reunião de Departamento",
        description: "Atualização mensal do departamento",
        status: MeetingStatusEnum.CONFIRMED,
        rating: RaitingMeetingEnum.MUITO_UTIL,
        date: new Date(2025, 4, 22),
        time: "10:00",
    },
]