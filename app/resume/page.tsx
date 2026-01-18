import { redirect, RedirectType } from 'next/navigation'

export default function ResumePage() {
	redirect('/assets/files/Resume_with_Cover_Letter_2026.pdf', RedirectType.push)
}
