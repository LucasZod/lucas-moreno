import React, { useMemo, useState } from "react"

export const useMaskHover = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isActiveMouseHover, setIsActiveMouseHover] = useState(false)

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget?.getBoundingClientRect()
        if (!rect) return
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        setMousePosition({ x, y })
        if (!isActiveMouseHover) setIsActiveMouseHover(true)
    }

    const handleMouseLeave = () => {
        setIsActiveMouseHover(false)
    }

    const styleMask = useMemo<React.CSSProperties>(() => {
        if (!isActiveMouseHover) return { opacity: 0 }
        const { x, y } = mousePosition
        return {
            maskImage: `radial-gradient(65px circle at ${x}px ${y}px, black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(65px circle at ${x}px ${y}px, black 0%, transparent 100%)`,
            opacity: 1,
        }
    }, [mousePosition, isActiveMouseHover])

    return {
        handleMouseMove,
        handleMouseLeave,
        styleMask,
    }
}