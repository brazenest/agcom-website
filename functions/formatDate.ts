// functions/formatDate.ts

/**
 * Format a Date or date-like string into a nice, readable form.
 *
 * Examples:
 *   "2025-11-20T00:00:00.000Z" -> "Nov 20, 2025"
 *   new Date("2025-01-05")     -> "Jan 5, 2025"
 */
export function formatDate(input: Date | string | null | undefined): string {
	if (!input) return "";

	let date: Date;

	if (input instanceof Date) {
		date = input;
	} else {
		const parsed = new Date(input);
		if (Number.isNaN(parsed.getTime())) {
			// Fallback: give back the raw string if parsing fails
			return String(input);
		}
		date = parsed;
	}

	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}