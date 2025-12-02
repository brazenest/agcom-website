// app/work/page.tsx
import { Page } from '@/components/ui/Page'
import { Section } from '@/components/ui/Section'
import { WorkIndexGrid } from '@/components/zones/work/WorkIndexGrid'
import { WorkIndexItem } from '@/types/work'
import workData from '@/data/work.json' assert { type: 'json' }

const { eyebrow, title, subtitle, items } = workData.indexPage

export const WorkIndexPage = () => (
	<Page id='work-index-page'>

		<Section
			align='left'
			width='default'
			spacing='spacious'
			eyebrow={eyebrow}
			title={title}
			subtitle={subtitle}
		/>

		<WorkIndexGrid workItems={items as WorkIndexItem[]} />

	</Page>
)
