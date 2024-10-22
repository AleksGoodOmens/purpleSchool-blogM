'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { postComment } from '@/api'
import { CustomButton, CustomInput, CustomTextArea, Paragraph } from '@/components'

import type { FormInputs } from './Form.interfaces'
import styles from './Form.module.scss'

function Form() {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>()

	const [errorMessage, setErrorMessage] = useState<string>('')
	const [success, setSuccess] = useState<string>('')

	const onSubmit = async (formData: FormInputs) => {
		try {
			setErrorMessage('')
			const response = await postComment(formData)

			if (response.message) {
				setSuccess(response.message)
			}
		} catch (error) {
			if (error instanceof Error) {
				setErrorMessage(error.message)
			}
		}
	}
	const resetForm = () => {
		reset()
		setSuccess('')
	}

	return (
		<>
			{!success && (
				<form
					className={styles['form']}
					onSubmit={handleSubmit(onSubmit)}>
					<CustomInput
						{...register('name', { required: { message: 'You forget type your name', value: true } })}
						placeholder="Имя"
					/>
					{errors.name && <Paragraph appearance="s">{errors.name.message}</Paragraph>}
					<CustomTextArea
						{...register('comment', {
							required: { message: 'please add comment', value: true },
							minLength: { value: 15, message: 'At least 15 symbols' },
							maxLength: { value: 200, message: 'max comment length are 200 symbols' },
						})}
						placeholder="Комментарии"
					/>
					{errors.comment && <Paragraph appearance="s">{errors.comment.message}</Paragraph>}

					<CustomButton className={styles['btn']}>Отправить</CustomButton>
				</form>
			)}
			{success && (
				<div className={styles.panel}>
					<Paragraph
						appearance="l"
						className={styles['panel__success']}>
						{success}
					</Paragraph>
					<CustomButton
						className={styles['panel__btn']}
						onClick={resetForm}>
						reset form
					</CustomButton>
				</div>
			)}
			{errorMessage && <div>{errorMessage}</div>}
		</>
	)
}

export { Form }
