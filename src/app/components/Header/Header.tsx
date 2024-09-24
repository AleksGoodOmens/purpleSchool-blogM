'use client'
import cn from 'classnames'
import Link from 'next/link'
import { useContext } from 'react'

import { CustomButton, CustomLink } from '@/components'
import { AppThemeContext } from '@/contexts/AppThemeContext'
import { useStickyHeader } from '@/utils/hooks/useStickyHeader'

import GitHubIcon from './github-icon.svg'
import styles from './header.module.scss'

function Header() {
	const isSticky = useStickyHeader()
	const { scheme, changeScheme } = useContext(AppThemeContext)
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
					href="https://github.com/AleksGoodOmens"
					type="basic">
					<GitHubIcon />
				</CustomLink>
			</div>
		</header>
	)
}

export { Header }
