import type { ReactNode } from "react"

export interface CustomCardProps {
    title: string
    number?: number
    actions?: ReactNode[]
    handleClick: () => void
}