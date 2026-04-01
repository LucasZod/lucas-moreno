import { useCallback, useState } from "react"

export const useMeasure = <T extends HTMLElement>() => {
    const [bounds, setBounds] = useState({ width: 0, height: 0 })

    const ref = useCallback((node: T | null) => {
        if (node !== null) {
            const rect = node.getBoundingClientRect()
            setBounds({ width: rect.width, height: rect.height })
        }
    }, [])

    return [ref, bounds] as const
}