// functions/formatDate.ts

/**
 * Format a Date or date-like string into a nice, readable form.
 */
export function formatDate(input: Date | string | null | undefined, format: DateFormat): string {
	if (!input) return ""

	let date: Date

	if (input instanceof Date) {
		date = input
	} else {
		const parsed = new Date(input)
		console.log('formatDate(): Parsing failed.')
		if (Number.isNaN(parsed.getTime())) {
			// Fallback: give back the raw string if parsing fails
			return String(input)
		}
		date = parsed
	}

	switch (format) {
	case 'datetime':
		return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`

	case 'default':
	default:
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		})
	}
}

type DateFormat = 'datetime' | 'default'
