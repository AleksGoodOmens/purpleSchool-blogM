import cn from 'classnames'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import { AppThemeProvider, GitHubProvider } from '@/contexts'

import { Header } from './components/Header/Header'
import styles from './page.module.scss'

import './globals.css'

const OpenSans = Open_Sans({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
	title: 'Блог - AmensGood',
	description: 'Учебный проект Purple school',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>): JSX.Element {
	return (
		<html lang="ru">
			<body className={cn(OpenSans.className)}>
				<AppThemeProvider className={styles.grid}>
					<GitHubProvider>
						<Header />
					</GitHubProvider>
					<main className={cn('headerInsurance', styles.main)}>{children}</main>
				</AppThemeProvider>
			</body>
		</html>
	)
}
