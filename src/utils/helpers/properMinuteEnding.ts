export const properMinutesEnding = (value: number) => {
	switch (value) {
		case 1:
			return `${value} минута`
		case 2:
			return `${value} минуты`
		default:
			return `${value} минут`
	}
}
