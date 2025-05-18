export interface IUserProfile {
    userId?: string;
    name: string;
    lastName: string;
    email: string;
    level: number;
    nextLevelXp?: number;
    totalXp: number;
    ranking: number;
    jobDescription: string;
    jobTitle: string;
}