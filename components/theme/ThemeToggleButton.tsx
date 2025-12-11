'use client'

import { useTheme } from './ThemeContext'
import { motion } from 'framer-motion'

export const ThemeToggleButton = () => {
	const { theme, mode, toggleTheme, toggleMode } = useTheme()

	return (
		<div className="flex gap-3 items-center">
			{/* Chromatic Theme Toggle */}
			<button
				onClick={toggleTheme}
				className="px-3 py-2 rounded-md bg-accent-bg-soft text-accent-fg hover:bg-accent-hover transition"
			>
				{theme === 'engineering' ? 'Engineering' : 'Cinematic'}
			</button>

			{/* Light/Dark Toggle */}
			<button
				onClick={toggleMode}
				className="px-3 py-2 rounded-md bg-accent-bg-soft text-accent-fg hover:bg-accent-hover transition"
			>
				{mode === 'dark' ? 'Dark' : 'Light'}
			</button>
		</div>
	)
}
