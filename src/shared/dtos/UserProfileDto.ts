export interface UserProfileDto {
    "userId": string,
    "name": string,
    "lastName": string,
    "email": string,
    "jobTitle": string,
    "jobDescription"?: string,
    "totalXp": number,
    "level": number
}