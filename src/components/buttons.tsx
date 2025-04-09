// src/components/buttons.tsx
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  color?: 'green' | 'red' | 'yellow' | 'indigo'
  className?: string
}

const colorStyles = {
  green: 'bg-green-500 text-white',
  red: 'bg-red-500 text-white',
  yellow: 'bg-yellow-500 text-black',
  indigo: 'bg-indigo-600 text-white',
}

export function Button({
  children,
  onClick,
  color = 'green',
  className = '',
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-xl transition-all duration-300'
  const finalClass = `${baseStyles} ${colorStyles[color]} ${className}`

  return (
    <button onClick={onClick} className={finalClass}>
      {children}
    </button>
  )
}
