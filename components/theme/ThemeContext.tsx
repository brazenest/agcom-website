'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type ThemeName = 'engineering' | 'cinematic'
type ModeName = 'light' | 'dark'

type ThemeContextValue = {
  theme: ThemeName
  mode: ModeName
  setTheme: (t: ThemeName) => void
  setMode: (m: ModeName) => void
  toggleTheme: () => void
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<ThemeName>('engineering')
	const [mode, setMode] = useState<ModeName>('light')

	/* -------------------------------------------------------
     Apply theme + mode to the DOM
  --------------------------------------------------------- */
	useEffect(() => {
		const root = document.documentElement

		// Set chromatic theme
		root.setAttribute('data-theme', theme)

		// Set color scheme
		if (mode === 'dark') {
			root.classList.add('dark')
		} else {
			root.classList.remove('dark')
		}
	}, [theme, mode])

	/* -------------------------------------------------------
     Restore saved theme from localStorage on initial load
  --------------------------------------------------------- */
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as ThemeName | null
		const savedMode = localStorage.getItem('mode') as ModeName | null

		if (savedTheme) setTheme(savedTheme)
		if (savedMode) setMode(savedMode)
	}, [])

	/* -------------------------------------------------------
     Persist changes
  --------------------------------------------------------- */
	useEffect(() => {
		localStorage.setItem('theme', theme)
	}, [theme])

	useEffect(() => {
		localStorage.setItem('mode', mode)
	}, [mode])

	const toggleTheme = () =>
		setTheme(prev => (prev === 'engineering' ? 'cinematic' : 'engineering'))

	const toggleMode = () =>
		setMode(prev => (prev === 'dark' ? 'light' : 'dark'))

	return (
		<ThemeContext.Provider
			value={{ theme, mode, setTheme, setMode, toggleTheme, toggleMode }}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => {
	const ctx = useContext(ThemeContext)
	if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
	return ctx
}
