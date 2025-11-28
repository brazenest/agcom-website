// app/work/page.tsx

import * as React from 'react'
import { Page } from '@/components/ui/Page'
import { Section } from '@/components/ui/Section'
import { WorkIndexCard } from '@/components/zones/work/WorkIndexCard'

export default function WorkIndexPage() {
	return (
		<Page id='work-index'>
			<Section
				align='left'
				width='default'
				spacing='spacious'
				eyebrow='Case studies'
				title='Engineering + cinematic storytelling across products, interfaces, and visuals.'
				subtitle='Selected work spanning consumer onboarding, search experiences, and cinematic product films.'
			/>

			<Section
				align='left'
				width='wide'
				spacing='comfortable'
			>
				<div className='grid gap-10 md:grid-cols-2 xl:grid-cols-3'>

					<WorkIndexCard
						eyebrow='Consumer DNA · Ancestry'
						title='Ancestry DNA Kit Activation'
						subtitle='A scalable, resilient React + Node onboarding flow used by millions of users.'
						href='/work/ancestry-dna-activation'
						imageSrc='/assets/images/work/ancestry/hero.jpg'
						tags={['React', 'TypeScript', 'Node', 'UX']}
					/>

					<WorkIndexCard
						eyebrow='Property Search'
						title='Timeshare Search & Rentals'
						subtitle='A high-clarity booking and search experience for dense inventory and high-variation data.'
						href='/work/timeshare-search-rentals'
						imageSrc='/assets/images/work/timeshare/timeshare-hero.jpg'
						tags={['Next.js', 'TypeScript', 'MySQL']}
					/>

					<WorkIndexCard
						eyebrow='Cinematic Production'
						title='Bellagio Fountains Cinematic'
						subtitle='Cinematic direction, camera, edit, and color for a top-performing visual series.'
						href='/work/shadowcat-bellagio-fountains'
						imageSrc='/assets/images/work/shadowcat-bellagio-fountains/hero.jpg'
						tags={['Direction', 'Camera', 'Edit', 'Color']}
					/>

				</div>
			</Section>
		</Page>
	)
}
