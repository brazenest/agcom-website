import { WorkHero } from "@/components/zones/work/WorkHero";
import { WorkAbstract } from "@/components/zones/work/WorkAbstract";
import { WorkMeta } from "@/components/zones/work/WorkMeta";
import { WorkProblemApproachOutcome } from "@/components/zones/work/WorkProblemApproachOutcome";
import { WorkAnatomy } from "@/components/zones/work/WorkAnatomy";
import { WorkDeepDive } from "@/components/zones/work/WorkDeepDive";
import { WorkGallery } from "@/components/zones/work/WorkGallery";
import { WorkInteractions } from "@/components/zones/work/WorkInteractions";
import { WorkPerformance } from "@/components/zones/work/WorkPerformance";
import { WorkChallenges } from "@/components/zones/work/WorkChallenges";
import { WorkBeforeAfter } from "@/components/zones/work/WorkBeforeAfter";
import { WorkCTA } from "@/components/zones/work/WorkCTA";
import { Page } from "@/components/ui/Page";
import { WorkBody } from "@/components/zones/work/WorkBody";

export default function ShadowcatBellagioFountainsPage() {
	return (
		<Page id="work-shadowcat-bellagio-fountains">

			{/* HERO */}
			<WorkHero
				eyebrow="Cinematic • SHADOWCATpictures"
				title="Bellagio Fountains — Cinematic Fountain Films"
				subtitle="A series of music-driven fountain pieces focused on timing, composition, and color that turned a familiar tourist subject into long-tail, high-retention videos."
				imageSrc="/assets/images/work/shadowcat-bellagio-fountains/hero.jpg"
				imageAlt="Cinematic frame of the Bellagio fountains at sunset with the Las Vegas skyline in the background"
				variant="cinematic"
			/>

			{/* ABSTRACT */}
			<WorkAbstract>
				<p>
					The Bellagio fountains in Las Vegas are filmed constantly—but most footage
					is shaky, overexposed, and too long to hold attention. I set out to treat
					the shows as cinematic subjects instead of tourist moments: deliberate
					framing, musical pacing, and color work tuned for YouTube viewing.
				</p>

				<p>
					Across multiple performances and tracks, I shot and edited a series of
					videos under SHADOWCATpictures that focus on motion arcs, rhythm, and
					color harmony. The result was a set of pieces that performed well over
					time, driving hundreds of thousands of views and strong retention from
					a simple, well-known subject.
				</p>
			</WorkAbstract>

			{/* META / AT A GLANCE */}
			<WorkMeta
				subtitle="Cinematic coverage of a familiar subject—shot and edited for rhythm, color, and long-tail engagement."
				columns={[
					{
						label: "Series",
						value: "Bellagio fountain films – SHADOWCATpictures",
					},
					{
						label: "Roles",
						value: ["Direction", "Camera", "Edit", "Color"],
					},
					{
						label: "Tools",
						value: [
							"4K mirrorless camera",
							"Adobe Premiere Pro",
							"Adobe After Effects",
						],
						usePills: true,
					},
					{
						label: "Focus areas",
						value: "Pacing, composition, color, and audience retention",
					},
				]}
			/>

			{/* PROBLEM → APPROACH → OUTCOME */}
			<WorkProblemApproachOutcome
				sections={[
					{
						title: "Problem",
						body:
							"Most fountain videos feel like documentation—long static takes, blown-out highlights, and minimal attention to musical phrasing. They’re easy to shoot, but hard to watch all the way through.",
					},
					{
						title: "Approach",
						body:
							"Treat the fountains like a recurring but finite performance. Plan framing and motion around musical peaks, shoot multiple shows, then cut and grade for cohesion, contrast, and emotional pacing.",
					},
					{
						title: "Outcome",
						body:
							"A series of cinematic pieces that hold viewer attention far better than typical tourist footage, driving strong long-tail views and engagement on YouTube.",
					},
				]}
			/>

			{/* ANATOMY */}
			<WorkAnatomy
				title="Frame & Motion Anatomy"
				subtitle="How composition, crowd, and skyline are arranged in a single frame to support rhythm and clarity."
				image="/assets/images/work/shadowcat-bellagio-fountains/anatomy.jpg"
				imageAlt="Annotated cinematic frame from a Bellagio fountain performance"
				variant="side"
				imageCallouts={[
					{
						number: 1,
						label: "Anchoring skyline",
						body: "The Las Vegas skyline provides a stable horizon and context, keeping the frame grounded as the water moves.",
						x: 18,
						y: 20,
					},
					{
						number: 2,
						label: "Motion arcs",
						body: "Diagonal fountain arcs lead the eye through the frame and emphasize musical phrasing.",
						x: 55,
						y: 40,
					},
					{
						number: 3,
						label: "Crowd silhouette",
						body: "Foreground silhouettes give scale and emotional context without distracting from the show.",
						x: 35,
						y: 78,
					},
					{
						number: 4,
						label: "Color contrast",
						body: "Warm sunset light against cooler water and sky creates a pleasing contrast that grades well.",
						x: 70,
						y: 28,
					},
				]}
			/>

			{/* BRIDGE SECTION — general narrative */}
			<WorkBody spacing="default">
				<p>
					With the visual structure of the performance mapped, the next step is
					understanding how the edit reinforces rhythm, contrast, and focal movement
					across the full sequence. This bridges the diagram into the practical
					choices shown in the selected frames.
				</p>
			</WorkBody>

			{/* GALLERY */}
			{/* <WorkGallery
				images={[
					"/assets/images/work/shadowcat-bellagio-fountains/frame-01.jpg",
					"/assets/images/work/shadowcat-bellagio-fountains/frame-02.jpg",
					"/assets/images/work/shadowcat-bellagio-fountains/frame-03.jpg",
					"/assets/images/work/shadowcat-bellagio-fountains/frame-04.jpg",
					"/assets/images/work/shadowcat-bellagio-fountains/frame-05.jpg",
					"/assets/images/work/shadowcat-bellagio-fountains/frame-06.jpg",
				]}
				caption="Selected frames showing motion arcs, color contrast, and the balance between skyline, water, and crowd."
			/> */}

			{/* DEEP DIVE */}
			<WorkDeepDive
				title="Editing for rhythm, not just coverage"
				subtitle="How shot selection, pacing, and color treatment turned repeated shows into distinct, rewatchable pieces."
			>
				<p>
					Each Bellagio performance repeats the same physical space and rough
					lighting conditions, but the music and choreography change the emotional
					feel. Instead of treating each show as a one-to-one document, the edits
					leaned into rhythm and contrast—what it feels like to stand there and
					hear that specific track.
				</p>

				<p>
					Footage was cut around musical phrases rather than fixed time slices.
					Shots breathe on longer notes and cut more aggressively on accents and
					percussive hits. This kept the pieces moving without feeling frantic,
					and gave individual fountains and sweeps space to land.
				</p>

				<ul className="list-disc list-outside">
					<li>Shot selection prioritized clean motion arcs and readable silhouettes.</li>
					<li>Cut points aligned with musical peaks, downbeats, and vocal entrances.</li>
					<li>Color grading pulled exposure into a cohesive range across multiple shows.</li>
					<li>Noise, camera shake, and overexposed frames were minimized in the final edit.</li>
				</ul>
			</WorkDeepDive>

			<WorkBody>
				Placeholder for WorkBody component content.
			</WorkBody>

			{/* INTERACTIONS / MOTION */}
			<WorkInteractions
				title="Motion & visual interactions"
				subtitle="How camera movement, pacing, and reframing guide attention through each performance."
				items={[
					{
						title: "Camera motion arcs",
						body:
							"Wide, deliberate pans and tilts follow the rise and fall of the water, instead of chasing every individual jet.",
					},
					{
						title: "Beat-synchronized cuts",
						body:
							"Edits land on musical accents and transitions, making the fountains feel like they’re performing with the track—not just in front of it.",
					},
					{
						title: "Dynamic reframing",
						body:
							"Subtle zooms and reframing moves gently shift focus between skyline, crowd, and water without disorienting the viewer.",
					},
					{
						title: "Breathing room",
						body:
							"Not every moment is filled; some shots deliberately hold to give the audience a sense of scale and atmosphere.",
					},
				]}
			/>

			{/* PERFORMANCE */}
			<WorkPerformance
				title="Viewer engagement & long-tail performance"
				subtitle="How deliberate pacing and composition influenced watch time and audience response."
				metrics={[
					{
						value: "260k+",
						label: "Total views across the series",
						body: "Driven organically over time from search, recommendations, and shares.",
					},
					{
						value: "High retention",
						label: "Watch time",
						body: "Cinematic pacing and shot selection helped hold viewers far longer than typical tourist uploads.",
					},
					{
						value: "Strong replay",
						label: "Rewatch behavior",
						body: "Comments and patterns in analytics suggested viewers revisited specific performances and timestamps.",
					},
				]}
			/>

			{/* CHALLENGES */}
			<WorkChallenges
				items={[
					{
						title: "Crowd & location constraints",
						body:
							"Shooting from public walkways meant working around unpredictable crowds, movement, and noise while still maintaining a clean frame.",
					},
					{
						title: "Lighting variability",
						body:
							"Shows span golden hour into full night, requiring flexible exposure and color strategies to keep cuts cohesive.",
					},
					{
						title: "Repetitive structure",
						body:
							"Each show shares a similar physical pattern; edits had to find new emotional and visual angles to avoid feeling redundant.",
					},
				]}
			/>

			{/* BEFORE / AFTER */}
			<WorkBeforeAfter
				title="From documentation to deliberate edit"
				subtitle="Evolving from simple “record it all” footage into pieces designed for viewers, not just memory."
				before={{
					label: "Before",
					body:
						"Early passes behaved like documentation—long static takes, minimal framing strategy, and loose pacing that was easy to lose attention in.",
				}}
				after={{
					label: "After",
					body:
						"Refined edits focused on musical phrasing, cleaner compositions, and tighter pacing, creating pieces that people actually finish and share.",
				}}
			/>

			{/* CTA */}
			<WorkCTA variant="shadowcat" />
		</Page>
	);
}
