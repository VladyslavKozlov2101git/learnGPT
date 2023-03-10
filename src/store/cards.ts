import { create } from "zustand";
import { devtools } from "zustand/middleware"
import axios from "axios";
import { CardInfo, fetchProps } from "./cards.props";



export const useCards = create(
    devtools<CardInfo>(set => ({
        quantity: 0,
        response: "",
        fetchWords: async (body: fetchProps) => {
            const res = await axios.post("https://api.openai.com/v1/chat/completions", {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "user", content: `Give ${body.quantity} most popular words about ${body.topic} level ${body.level} in in format array of words: {\"value\": \"this word\", \"transcription\": \"this word transcription\", \"example\":\"One sentence with the word\", \"example_ua\":\"Translate the example ukrainian\", \"meaning\":'\"Meaning of the word\", } ` },
                ],
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer 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`,
                    },
                })

            set({ response: await res.data?.choices[0]?.message?.content })
        }
    }))
)


