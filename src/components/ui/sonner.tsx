"use client"

import { Toaster as Sonner } from "sonner"

export function Toaster({ theme = "system", ...props }: { theme?: "light" | "dark" | "system" }) {
  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={{
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      } as React.CSSProperties}
      {...props}
    />
  )
}
