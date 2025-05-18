export interface IUserProfile {
    name: string;
    level: number;
    nextLevelXp: number;
    xp: number;
    badges?: {
        icon: string;
        name: string;
        description: string;
    }[];
    ranking: number;
}