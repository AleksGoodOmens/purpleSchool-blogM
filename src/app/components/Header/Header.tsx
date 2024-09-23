'use client'
import cn from 'classnames'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { CustomLink } from '@/components'

import GitHubIcon from './github-icon.svg'
import styles from './header.module.scss'

function Header() {
	const [isSticky, setIsSticky] = useState(false)

	const scrollHeader = () => {
		if (window.scrollY >= 20) {
			setIsSticky(true)
		} else setIsSticky(false)
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollHeader)
		return () => {
			window.removeEventListener('scroll', scrollHeader)
		}
	}, [])

	return (
		<header
			className={cn(styles['header'], {
				[styles['sticky']]: isSticky,
			})}>
			<div className={cn(styles['header__content'], 'container')}>
				<Link href={'/'}>
					Blog by <br />
					AmensGood
				</Link>
				<CustomLink
					target="blank"
					href="https://github.com/AleksGoodOmens"
					type="basic">
					<GitHubIcon />
				</CustomLink>
			</div>
		</header>
	)
}

export { Header }
