import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const JetBrains = JetBrains_Mono({ subsets: ['cyrillic', 'latin'] })

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
			<body className={JetBrains.className}>{children}</body>
		</html>
	)
}
