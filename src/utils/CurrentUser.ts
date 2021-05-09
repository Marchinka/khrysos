interface User {
    id: number;
}

export default (req: any): User => {
    return {
        id: 1
    }
}