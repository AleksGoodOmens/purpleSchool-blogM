'use client'
import cn from 'classnames'
import Link from 'next/link'

import { CustomLink } from '@/components'
import { useStickyHeader } from '@/utils/hooks/useStickyHeader'

import GitHubIcon from './github-icon.svg'
import styles from './header.module.scss'

function Header() {
	const isSticky = useStickyHeader()
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
