import { WorkHero } from "@/components/zones/work/WorkHero";
import { WorkAbstract } from "@/components/zones/work/WorkAbstract";
import { WorkProblemApproachOutcome } from "@/components/zones/work/WorkProblemApproachOutcome";
import { WorkDeepDive } from "@/components/zones/work/WorkDeepDive";
import { WorkAnatomy } from "@/components/zones/work/WorkAnatomy";
import { WorkSearchFlow } from "@/components/zones/work/WorkSearchFlow";
import { WorkInteractions } from "@/components/zones/work/WorkInteractions";
import { WorkPerformance } from "@/components/zones/work/WorkPerformance";
import { WorkBeforeAfter } from "@/components/zones/work/WorkBeforeAfter";
import { WorkCTA } from "@/components/zones/work/WorkCTA";
import { WorkChallenges } from "@/components/zones/work/WorkChallenges";
import { WorkMeta } from "@/components/zones/work/WorkMeta";
import { WorkBody } from "@/components/zones/work/WorkBody";

export default function TimeshareSearchRentalsPage() {

	const image = {
		src: "/assets/images/work/timeshare-search-rentals/hero.webp",
		alt: "Timeshare Search & Rentals - Property search interface on desktop and mobile devices",
	}

	const pao = {
		problem: {
			content:
				"Listing density, inconsistent formatting, and unclear hierarchy made decision-making harder than necessary. Important details blended together, and comparison was mentally heavy for users."
		},
		approach: {
			content:
				"Rebuild the listing card system with a strong hierarchy, clear structure, and consistent patterns for price, dates, and amenities. Improve scanning ergonomics and unify the visual language."
		},
		outcome: {
			content:
				"A predictable, easier-to-compare listings experience. Users could more quickly evaluate options, identify deal-breakers, and move confidently into the booking flow."
		}	
	}

	return (
		<main id="work-timeshare-search-rentals" className="layout-page">

			<WorkHero
				eyebrow="Property Search · Timeshare Platform"
				title="Timeshare Search & Rentals"
				subtitle="A high-clarity listings and booking experience built for dense content, trust, and conversion."
				image={image}
			/>

			<WorkAbstract>
				<p>
					Timeshare listings carry heavy information density—multiple date ranges, amenities, room types, owner notes, price fluctuations, and varying availability states. The original interface was flexible but visually inconsistent, making comparison and decision-making harder for users.
				</p>
				<p>
					I redesigned the listing card system, search interactions, and
					booking paths to improve clarity, scanning behavior, and trust.
					The result was a more informative, predictable experience that
					made it easier for users to confidently evaluate options.
				</p>
			</WorkAbstract>

			<WorkMeta
				subtitle="A clearer way to browse dense listings, compare options, and book with confidence."
				columns={[
					{
						label: "Platform",
						value: "Timeshare search & rentals"
					},
					{
						label: "Tech stack",
						value: ["Next.js", "TypeScript", "MySQL", "Node"],
						usePills: true
					},
					{
						label: "Focus areas",
						value: "UI clarity, search ergonomics, design systems"
					},
					{
						label: "Role",
						value: ["Frontend architecture", "Component design", "UX refinement"]
					}
				]}
			/>

			<WorkProblemApproachOutcome
				spacing="comfortable"
				problem={pao.problem}
				approach={pao.approach}
				outcome={pao.outcome}
			/>

			<WorkBody>
				<p>
					Before diving into the details of the redesigned listing card,
					it’s important to understand how the information density shaped
					the visual system for the entire search flow.
				</p>
			</WorkBody>

			<WorkAnatomy
				spacing="comfortable"
				title="Listing Card Anatomy"
				subtitle="A structured card system that made dense inventory predictable, comparable, and trustworthy."
				imageSrc="/assets/images/work/timeshare-search-rentals/anatomy/timeshare-search-rentals__anatomy__diagram.png"
				imageAlt="Timeshare listing card anatomy diagram"
				variant="side"
				imageCallouts={[
					{
						number: 1,
						label: "Title & Location",
						body: "Unified naming conventions and stable placement improved recognition and orientation.",
						x: 12,
						y: 14
					},
					{
						number: 2,
						label: "Pricing & Fees",
						body: "Reorganized pricing groups made nightly rate, totals, and fees transparent.",
						x: 72,
						y: 18
					},
					{
						number: 3,
						label: "Amenities Block",
						body: "Standardized icons and spacing made it easy to scan and compare.",
						x: 18,
						y: 62
					},
					{
						number: 4,
						label: "Primary CTA",
						body: "A single clear action improved predictability and reduced cognitive load.",
						x: 72,
						y: 68
					}
				]}
			/>

			<WorkSearchFlow
				steps={[
					{
						label: "Search & filters",
						body: "Users start with destination, dates, and basic constraints. Filters are grouped and named to match how people actually think about the trip."
					},
					{
						label: "Result set",
						body: "Listings are returned in a stable order with clear pagination, predictable card layout, and visible applied filters."
					},
					{
						label: "Listing details",
						body: "Clicking into a listing carries over key details (dates, guests, pricing context) and fills in the deeper specifics."
					},
					{
						label: "Booking",
						body: "The final flow confirms price, dates, and policies without introducing new UI patterns or surprises."
					},
				]}
			/>

			<WorkDeepDive
				spacing="comfortable"
				title="Designing clarity for dense listings"
				subtitle="How the listing card and surrounding patterns were rebuilt to reduce cognitive load."
			>
				<p>
					Timeshare listings are inherently dense: dates, room types, bed counts,
					amenities, pricing, and fine print all compete for attention. The goal
					wasn&apos;t to hide detail, but to give it a clear, predictable structure
					so people could actually compare options.
				</p>

				<p>
					We treated the listing card as a small layout system: a fixed place for
					core identity (resort, location), a consistent lane for pricing, and a
					vertical band for availability and next steps. That structure then informed
					how filters, sort options, and empty states needed to behave.
				</p>

				<ul className="list-disc list-outside">
					<li>Primary info (where / what) surfaced at the top, in a consistent type scale.</li>
					<li>Pricing, discounts, and constraints grouped visually instead of scattered.</li>
					<li>Actions (“view details”, “book”) stabilized into a single, reliable affordance.</li>
				</ul>

				<p>
					Because the card was systematized, adding new flags or offer types became
					a configuration problem instead of a one-off layout fix. That made the
					interface easier to maintain while still feeling tailored to each listing.
				</p>
			</WorkDeepDive>

			<WorkBody spacing="tight">
				<p>
					With the core structure in place, the next stage centered on stabilizing
					the variability across inventory, balancing trust cues, and reinforcing
					consistency throughout the booking journey.
				</p>
			</WorkBody>

			<WorkChallenges
				spacing="default"
				items={[
					{
						title: "Information hierarchy",
						body:
							"Each card needed to present dates, room type, resort attributes, pricing cues, and availability without overwhelming the user. We created a clear typographic and spatial system."
					},
					{
						title: "Data variability",
						body:
							"Listings could have missing or inconsistent fields from owners. The redesigned components gracefully handled partial data while keeping the layout stable."
					},
					{
						title: "Trust signals",
						body:
							"The new design emphasized clarity, consistency, and small cues like verified tags, price context, and state indicators—helping users feel confident taking the next step."
					}
				]}
			/>

			<WorkInteractions
				title="Key Interaction Patterns"
				subtitle="Designing predictable, ergonomic interactions across search, filtering, and booking."
				items={[
					{
						title: "Stable card interactions",
						body: "Hover, focus, and tap states stayed consistent across dense result sets, reinforcing predictability."
					},
					{
						title: "Responsive information reveal",
						body: "Cards adapt their information density based on device size without altering the interaction model."
					},
					{
						title: "Predictable filtering behavior",
						body: "Filters update results instantly with no layout shifts, preserving user spatial memory."
					},
					{
						title: "Consistent CTA lane",
						body: "Primary actions live in a defined lane, making it easy to continue to listing details or booking."
					}
				]}
			/>

			<WorkPerformance />

			<WorkBeforeAfter
				title="Improving clarity without increasing cognitive load"
				subtitle="A comparison of the original listing card structure and the redesigned, systemized model."
				before={{
					body: "Inconsistent card layouts made scanning difficult—pricing, dates, and amenities shifted locations between listings. Users had to re-learn the card structure each time."
				}}
				after={{
					body: "A unified, predictable card design created stable scanning paths. Pricing, date ranges, and amenities appear in consistent lanes, making comparison effortless."
				}}
			/>

			<WorkCTA variant="timeshare" />

		</main>
	);
}
