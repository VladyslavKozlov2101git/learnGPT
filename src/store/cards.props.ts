export interface fetchProps {
    level: "B2" | "B1" | "A2" | "A1" | "C1" | "C2",
    topic: string,
    quantity: number
}

export interface CardInfo {
    quantity: number,
    response: any,
    fetchWords: (body: fetchProps) => void
}