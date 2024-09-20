export const properMonthEnding = (value: number) => {
	switch (value) {
		case 1:
			return `${value} месяц назад`
		case 2:
		case 3:
		case 4:
			return `${value} месяца назад`
		default:
			return `${value} месяцев назад`
	}
}
