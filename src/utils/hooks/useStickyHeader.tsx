'use client'

import { useCallback, useEffect, useState } from 'react'

function useStickyHeader(offset = 20) {
	const [isSticky, setIsSticky] = useState(false)

	const scrollHeader = useCallback(() => {
		if (window.scrollY >= offset) {
			setIsSticky(true)
		} else setIsSticky(false)
	}, [offset])

	useEffect(() => {
		window.addEventListener('scroll', scrollHeader)
		return () => {
			window.removeEventListener('scroll', scrollHeader)
		}
	}, [scrollHeader])
	return isSticky
}

export { useStickyHeader }
