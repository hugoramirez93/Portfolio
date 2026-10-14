import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const ThemeContext = createContext(null)

function getInitialTheme() {
  if (typeof window === 'undefined') return true
  try {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    // Default to the dark-first design.
    return true
  } catch {
    return true
  }
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
    root.style.colorScheme = isDark ? 'dark' : 'light'
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {
      /* storage unavailable — ignore */
    }
  }, [isDark])

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), [])

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
