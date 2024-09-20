import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
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
			<body className={OpenSans.className}>{children}</body>
		</html>
	)
}
