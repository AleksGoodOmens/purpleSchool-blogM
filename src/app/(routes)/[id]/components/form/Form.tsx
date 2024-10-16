'use client'

import { CustomButton, CustomInput, CustomTextArea } from '@/components'

import styles from './Form.module.scss'

function Form() {
	return (
		<form className={styles['form']}>
			<CustomInput placeholder="Имя" />
			<CustomTextArea placeholder="Комментарии" />
			<CustomButton className={styles['btn']}>Отправить</CustomButton>
		</form>
	)
}

export { Form }
