"use client"

import type React from "react"

// This is a simplified mock of framer-motion to make it work in the v0 preview
// In a real project, you would import the actual framer-motion library

export const motion = {
  div: ({
    children,
    className,
    initial,
    animate,
    transition,
    ...props
  }: React.HTMLProps<HTMLDivElement> & {
    initial?: any
    animate?: any
    transition?: any
  }) => {
    return (
      <div
        className={className}
        style={{
          transition: "all 0.3s ease",
          ...props.style,
        }}
        {...props}
      >
        {children}
      </div>
    )
  },
}
