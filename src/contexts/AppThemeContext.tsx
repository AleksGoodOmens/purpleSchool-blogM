'use client'
import cn from 'classnames'
import type { PropsWithChildren } from 'react'
import { createContext, useEffect, useState } from 'react'

export type themes = 'dark' | 'light'

export interface ITheme {
	className?: string
	scheme?: themes
	changeScheme?: () => void
}

export const AppThemeContext = createContext<ITheme>({
	scheme: 'light',
})

export const AppThemeProvider = ({ children, className }: PropsWithChildren<ITheme>) => {
	const [theme, setTheme] = useState<themes>('light')

	const changeScheme = () => {
		setTheme((prev) => {
			const newTheme = prev === 'light' ? 'dark' : 'light'
			localStorage.setItem('purpleTheme', newTheme)
			return newTheme
		})
	}

	useEffect(() => {
		const storageTheme = localStorage.getItem('purpleTheme')
		if (storageTheme) {
			setTheme(storageTheme as themes)
		}
	}, [])

	return (
		<AppThemeContext.Provider value={{ scheme: theme, changeScheme }}>
			<div className={cn(className, theme, 'app')}>{children}</div>
		</AppThemeContext.Provider>
	)
}
