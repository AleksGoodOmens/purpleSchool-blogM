'use client'
import cn from 'classnames'
import Link from 'next/link'
import { useContext } from 'react'

import { CustomButton, CustomLink } from '@/components'
import { GitHubContext } from '@/contexts'
import { AppThemeContext } from '@/contexts/AppThemeContext'
import { useStickyHeader } from '@/utils/hooks/useStickyHeader'

import styles from './header.module.scss'

function Header() {
	const isSticky = useStickyHeader()
	const { scheme, changeScheme } = useContext(AppThemeContext)
	const { gitIcon, path } = useContext(GitHubContext)
	return (
		<header
			className={cn(styles['header'], {
				[styles['sticky']]: isSticky,
			})}>
			<div className={cn(styles['header__content'], 'container')}>
				<Link
					className={styles['logo']}
					href={'/'}>
					Blog by <br />
					AmensGood
				</Link>
				<CustomButton onClick={changeScheme}>{scheme}</CustomButton>
				<CustomLink
					target="blank"
					href={path as string}
					type="basic">
					{gitIcon && gitIcon()}
				</CustomLink>
			</div>
		</header>
	)
}

export { Header }
