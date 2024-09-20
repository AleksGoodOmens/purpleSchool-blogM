import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import './globals.css'
import { Header } from './components/Header/Header'

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
			<body className={OpenSans.className}>
				<Header />
				<main className="headerInsurance grow">{children}</main>
			</body>
		</html>
	)
}
