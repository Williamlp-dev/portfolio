"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Toggle } from "@/components/ui/toggle"

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return <div className="size-9" />
  }
  return (
    <div>
      <Toggle
        aria-label={`Mudar para o tema ${theme === "dark" ? "claro" : "escuro"}`}
        className="btn-press group size-9 data-[state=on]:bg-transparent data-[state=on]:hover:bg-muted"
        onPressedChange={toggleTheme}
        pressed={theme === "dark"}
        variant="outline"
      >
        <MoonIcon
          aria-hidden="true"
          className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
          size={16}
        />
        <SunIcon
          aria-hidden="true"
          className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
          size={16}
        />
      </Toggle>
    </div>
  )
}
