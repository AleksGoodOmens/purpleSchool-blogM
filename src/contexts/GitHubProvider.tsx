'use client'
import type { PropsWithChildren } from 'react'
import { createContext } from 'react'

import Icon from './github-icon.svg'

export interface IContextProps {
	path?: string
	gitIcon?: () => JSX.Element
}

export const GitHubContext = createContext<IContextProps>({})

export const GitHubProvider = ({ children }: PropsWithChildren<IContextProps>) => {
	return (
		<GitHubContext.Provider value={{ path: 'https://github.com/AleksGoodOmens', gitIcon: () => <Icon /> }}>
			{children}
		</GitHubContext.Provider>
	)
}
