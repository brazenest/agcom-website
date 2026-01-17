import { Page } from '@/components/apollo/Page'
import { Section } from '@/components/apollo/Section'

export default function ContactPage() {
	return (
		<Page>

			{/* 1. Opening Assertion */}
			<Section
				width="narrow"
				height="medium"
				align="centered"
				spacing="expand"
			>
				<p className="text-center text-lg">
          If you’re working on something that needs clarity, judgment, and restraint,
          this is the right place to start.
				</p>
			</Section>

			{/* 2. Contact Method */}
			<Section
				width="content"
				height="medium"
				align="centered"
			>
				<form className="max-w-xl mx-auto grid gap-6">

					<div>
						<label className="block text-sm mb-1">
              Name
						</label>
						<input
							type="text"
							className="w-full border rounded px-3 py-2"
						/>
					</div>

					<div>
						<label className="block text-sm mb-1">
              Email
						</label>
						<input
							type="email"
							className="w-full border rounded px-3 py-2"
						/>
					</div>

					<div>
						<label className="block text-sm mb-1">
              Message
						</label>
						<textarea
							rows={5}
							className="w-full border rounded px-3 py-2"
						/>
					</div>

					<div>
						<button
							type="submit"
							className="underline underline-offset-4 self-start"
						>
              Send
						</button>
					</div>

				</form>
			</Section>

			{/* 3. Expectation Setting */}
			<Section
				width="narrow"
				height="short"
				align="centered"
				spacing="standard"
			>
				<p className="text-center text-sm opacity-70">
          I typically respond within a day or two. If it’s a good fit,
          we’ll figure out next steps quickly.
				</p>
			</Section>

			{/* 4. Quiet Close */}
			<Section
				width="narrow"
				height="short"
				align="centered"
			>
				<p className="text-center">
          No pitches. No pressure. Just a conversation.
				</p>
			</Section>

		</Page>
	)
}
