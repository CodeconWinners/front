

export const LocalStorageService = () => {

    return {
        get(key: string): string | null {
            const result = localStorage.getItem(key);
            if (result) {
                return result;
            }
            return null;
        },
        set(key: string, value: any) {
            localStorage.setItem(key, value);
        }
    }
}