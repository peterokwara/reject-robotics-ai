<script lang="ts">
	const testimonials = [
		{
			user: 'ptul',
			handle: '@DavisKipchirch3',
			time: '5h',
			comments: [
				'First, the parliament is in recess so no way you sail through a reading.',
				'Second, that bill is completely atrocious. If you really want to involve yourself with the field, build and go to the market.',
				'Third, I hate you guys for even conceiving such a bill.'
			]
		},
		{
			user: 'silent3conomist',
			handle: '@silent3conomist',
			time: '4h',
			comments: [
				"Bro, hiyo kiherere yako ya ujinga wachana nayo before it's too late, bcz we won't forgive you. It's pple like you that are causing unemployment. AI pia mnataka kugatekeep? Suti yako pekee portrays your background of ushamba & poverty. Yet you dnt want other pple to escape poverty"
			]
		},
		{
			user: 'Nathan HO',
			handle: '@vbkenya',
			time: '3h',
			comments: [
				'A strategy is a plan of action. It does not involve a bill that seeks to gatekeep or create restrictions on innovation or practice.'
			]
		},
		{
			user: 'ATMEGA | ARM Sensei',
			handle: '@Nicabedgathaba',
			time: '2h',
			comments: [
				"Tutigithie goma. I promise you, it won't/can't be a law in this republic. I'll make sure it fails."
			]
		},
		{
			user: 'Wanjohi',
			handle: '@WanjohiNjega',
			time: '1h',
			comments: [
				'An industry in its infancy stage and you want to own it personally through a punitive bill. Shindwe!'
			]
		},
		{
			user: 'Yussuf Omar Dakane',
			handle: '@omar_dakane',
			time: '3h',
			comments: [
				"This bill should be stopped right now because it's unfair and will push us back a lot. It's like they want to make laws just to hurt Kenyans and then pretend it's good for the country. How is that fair?"
			]
		},
		{
			user: 'Thuita',
			handle: '@S_Thuita_M',
			time: '4h',
			comments: [
				'How comes this con man is still parading around, watu wa tech pia nyinyi mko na mchezo. Do something!'
			]
		},
		{
			user: 'JACKTONE MOMANYI',
			handle: '@MomanyiJacktone',
			time: '7h',
			comments: ['Motivational speakers coming up with regulations.']
		},
		{
			user: 'Sebastian Muchui',
			handle: '@astianmuchui',
			time: '3h',
			comments: [
				'How will it benefit me as robotics (or AI) hobbyist? Does that mean I cannot own a robotics kit to end my boredom during weekends? How about classwork if I study CS/Engineering?'
			]
		},
		{
			user: 'Visual Artist',
			handle: '@nduta_samwa',
			time: '6h',
			comments: [
				'We shall deal with you perpendicularly within no time. Right now our anger is somewhere else but we will remember.  I went through this bill and it disproportionately focuses on regulating the robotics sector while neglecting essential AI aspects.  Leteni number tumsalmie'
			]
		},
		{
			user: 'Mkenya',
			handle: '@Val_Sales_Ke',
			time: '1h',
			comments: [
				'Uncle Sam knows the Kenyan human labor in tech industry is valuable and cheap. You Kennedy, cannot understand why this bill will oppress us.  We will never ever get ourselves out of the mess you are advocating for.  Or even have a chance of owning our own tech innovations.'
			]
		},
		{
			user: 'Humble African',
			handle: '@ni_vQee',
			time: '4h',
			comments: [
				'In Kenya everything is an opportunity for the government to make Money and MPigs have been enabling this extortion for way too long. We are going to change this once and for all'
			]
		},
		{
			user: 'astra',
			handle: '@cicada254',
			time: '6h',
			comments: [
				'In all honesty, can you please explain how this bill will benefit anyone, anyone aside from those on fancy suits. This bill, just like the IT practitioners one before it shouldnt even be tabled for a debate by the lawmakers.'
			]
		},
		{
			user: 'Swahiliyan',
			handle: '@Swahiliyan',
			time: '3h',
			comments: [
				'This doesnt sound right, there are data protection laws, there are cyber crime laws and best practices why do you need to control AI when we havent even scratched the surface on basic cyber crime and data protection laws.'
			]
		},
		{
			user: 'Sharpest Omen',
			handle: '@mishe067',
			time: '59m',
			comments: [
				'First, stakeholders werent involved at any stage when drafting the bill. The bill only focuses on regulating the robotics industry rather than addressing pending issues so why put it in place?'
			]
		},
		{
			user: 'Epale',
			handle: '@epalemike',
			time: '4h',
			comments: [
				'Unatisha watu na mapicha hapa jomba, nothing serious. If it is punitive and meant to gatekeep AI development in the Country it isnt going anywhere. Lets wait for Parliament to resume.'
			]
		},
		{
			user: 'LastChieftain',
			handle: '@MutantXperience',
			time: '7h',
			comments: [
				'Was there any meaningful public participation before you fraudsters took it to parliament?#RejectAIRoboticsBill2023'
			]
		},
		{
			user: 'Sikuoni',
			handle: '@sikuoni',
			time: '4h',
			comments: [
				'If there is something called greed, this is it. You guys are basically trying to gatekeep and own this space. Hii ni ulafi tu, and deep down you guys know so.... Si hata you build some commercial ML / AI tools and take to marklet badala ya kujaribu kupolice other people?'
			]
		}
	];
</script>

<svelte:head>
	<!-- Primary Tags -->
	<title>Reject The Robotics And AI Bill 2024</title>
	<meta name="title" content="Reject The Robotics And AI Bill 2024" />
	<meta name="description" content="Keep Technology Open for Everyone" />

	<!-- Twitter -->
	<meta property="twitter:title" content="Reject The Robotics And AI Bill 2024" />
	<meta property="twitter:description" content="Keep Technology Open for Everyone" />
	<meta
		property="twitter:image"
		content="https://reject-robotics-ai.vercel.app/images/open-graph/website.jpg"
	/>
	<meta property="twitter:url" content="https://reject-robotics-ai.vercel.app" />
	<meta property="twitter:card" content="summary_large_image" />

	<!-- Facebook -->
	<meta property="og:title" content="Reject The Robotics And AI Bill 2024" />
	<meta property="og:description" content="Keep Technology Open for Everyone" />
	<meta property="og:url" content="https://reject-robotics-ai.vercel.app" />
	<meta
		property="og:image"
		content="https://reject-robotics-ai.vercel.app/images/open-graph/website.jpg"
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<!-- top bar -->
<div class="bg-neutral py-1.5 text-center text-xs text-neutral-content md:text-sm">
	<span>
		<span class="font-semibold text-error">Wake-up</span> call!
		<span class="font-semibold text-warning">The Kenya Robotics and AI Society Bill 2024</span>
		is being <span class="font-semibold text-warning">discussed right now.</span> Your future is
		being decided. <span class="font-semibold text-warning">Are you in the room?</span>
	</span>
</div>

<!-- hero section -->
<section class="relative hero isolate">
	<div
		class="w-48 h-48 left-10 top-10 absolute -z-10 bg-red-400 bg-opacity-90 rounded-full blur-[300px]"
	/>
	<div
		class="w-72 h-72 left-20 top-20 absolute -z-10 bg-blue-400 bg-opacity-90 rounded-full blur-[300px]"
	/>
	<div
		class="flex flex-col items-center justify-between max-w-5xl px-5 py-10 mx-auto hero__container lg:px-10 gap-y-10 lg:py-24"
	>
		<div class="hero-content flex items-center justify-center flex-col gap-y-3.5 w-full">
			<h2
				class="relative mx-auto text-3xl font-black text-center md:text-4xl lg:text-5xl xl:text-6xl max-w- md:max-w-2xl lg:max-w-3xl text-zinc-800"
			>
				Shape Kenya's Tech Future: Your Voice Matters!
			</h2>
			<p
				class="max-w-xs mx-auto text-base font-medium text-center lg:text-left lg:max-w-full lg:text-lg"
			>
				The Robotics and AI Bill is here. Are you ready for it?
			</p>
			<a href="#cta" class="btn btn-primary">Create Awareness</a>

			<div class="relative flex flex-col items-center pt-5 jus gap-y-2">
				<div class="absolute -left-5 top-10">
					<!-- <img src={arrow} alt="" /> -->
				</div>
				<!-- <img class="w-[80%]" src={heroTestimonial} alt="" /> -->
				<!-- <p class="font-medium text-slate-500/80">Some amazing people who joined us</p> -->
			</div>
		</div>
	</div>
</section>

<!-- imagine -->
<section class="max-w-5xl px-10 py-10 mx-auto benefit__section lg:px-0">
	<div
		class="flex flex-col items-center justify-center max-w-xl mx-auto headline__container gap-y-5"
	>
		<h2 class="text-2xl font-bold text-center md:text-3xl lg:text-5xl">
			<span class="text-primary">Imagine</span> a Kenya...
		</h2>
		<p class="text-sm font-medium text-center md:text-base lg:text-lg">
			Where robots assist in healthcare, AI boosts crop yields, and tech innovation creates
			thousands of jobs. This future is within reach, but a new bill could change everything.
		</p>
	</div>
	<div class="flex items-center justify-center w-full pt-8">
		<a href="#cta" class="btn btn-primary">Create Awareness</a>
	</div>
</section>

<!-- opportunity -->
<section class="max-w-5xl px-10 py-10 mx-auto benefit__section lg:px-0">
	<div
		class="flex flex-col items-center justify-center max-w-xl mx-auto headline__container gap-y-5"
	>
		<h2 class="text-2xl font-bold text-center md:text-3xl lg:text-5xl">
			The <span class="text-primary">Stakes</span> Are <span class="text-primary">High</span>
		</h2>
	</div>
	<div class="flex flex-col items-center justify-center max-w-xl py-10 mx-auto gap-y-5">
		<div class="flex flex-col items-center justify-center w-full md:flex-row gap-y-5 gap-x-5">
			<div
				class="flex flex-col items-center justify-center w-full p-5 py-10 border rounded-lg gap-y-2 lg:w-1/2"
			>
				<p class="text-4xl font-semibold lg:text-5xl text-primary">133 M</p>
				<p class="text-base font-medium lg:text-lg">
					AI could create 133 million new roles by 2025. Will Kenya be ready?
				</p>
			</div>
			<div
				class="flex flex-col items-center justify-center w-full p-5 py-10 border rounded-lg gap-y-2 lg:w-1/2"
			>
				<p class="text-4xl font-semibold lg:text-5xl text-primary">Millions</p>
				<p class="text-base font-medium lg:text-lg">
					AI diagnostics could save millions of lives. But only if we get the regulations right.
				</p>
			</div>
		</div>
		<div
			class="flex flex-col items-center justify-center w-full p-5 py-10 border rounded-lg gap-y-2"
		>
			<p class="text-4xl font-semibold lg:text-5xl text-primary">Privacy</p>

			<p class="max-w-sm text-base font-semibold text-center md:text-xl xl:text-2xl xl:max-w-md">
				Who controls your data in an AI-driven world? This bill decides
			</p>
		</div>

		<a href="#cta" class="btn btn-primary">Create Awareness</a>
	</div>
</section>

<!-- promise  -->
<section class="max-w-5xl px-4 py-10 mx-auto benefit__section lg:px-0">
	<div
		class="flex flex-col items-center justify-center max-w-xl mx-auto headline__container gap-y-5"
	>
		<h2 class="text-2xl font-bold text-center md:text-3xl lg:text-5xl">
			The <span class="text-primary">Promise</span>
		</h2>
	</div>
	<div class="flex flex-col items-center justify-center max-w-xl py-4 mx-auto gap-y-5">
		<section class="max-w-5xl mx-auto feature__section">
			<div class="grid grid-cols-1 gap-10 px-10 py-4 features-card lg:px-14 xl:px-2 lg:py-20">
				<div
					class="features-card-box bg-[#E3F9E5] border border-green-300/50 rounded-xl p-6 flex flex-col gap-y-6"
				>
					<div class="flex flex-col card-content gap-y-2">
						<p class="text-xl">🤞</p>
						<h3 class="text-xl font-semibold lg:text-2xl">
							A framework for responsible AI development in Kenya.
						</h3>
						<p class="text-base text-[#7c7c7c] font-medium">
							"The object of this Act is to provide a framework to promote and advance the
							responsible and ethical development and application of robotics and artificial
							intelligence technologies in Kenya." (Page 5)
							<br />
							<br />
							"To develop a sandbox policy that is inclusive and addresses all aspects of AI development,
							with collaboration from stakeholders from government, industry, academia, and civil society."
							(Page 6)
							<br />
							<br />
							"To develop a national AI strategy that prioritizes the use of Swahili in AI development.
							This strategy should outline goals, timelines, and resources needed." (Page 5)
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
	<div class="flex items-center justify-center w-full">
		<a href="#cta" class="btn btn-primary">Create Awareness</a>
	</div>
</section>

<!-- vs Reality  -->
<section class="max-w-5xl px-4 py-10 mx-auto benefit__section lg:px-0">
	<div
		class="flex flex-col items-center justify-center max-w-xl mx-auto headline__container gap-y-5"
	>
		<h2 class="text-2xl font-bold text-center md:text-3xl lg:text-5xl">
			vs <span class="text-primary">Reality</span>
		</h2>
	</div>
	<div class="flex flex-col items-center justify-center max-w-xl py-10 mx-auto gap-y-5">
		<section class="max-w-5xl mx-auto feature__section">
			<div class="grid grid-cols-1 gap-10 px-10 py-4 features-card lg:px-14 xl:px-2 lg:py-20">
				<div
					class="features-card-box bg-[#FFF1EE] border border-orange-300/50 rounded-xl p-6 flex flex-col gap-y-6"
				>
					<div class="flex flex-col card-content gap-y-2">
						<p class="text-xl">📜</p>
						<h3 class="text-xl font-semibold lg:text-2xl">Too many rules slow down new ideas</h3>
						<p class="text-base text-[#7c7c7c] font-medium">
							Having too many rules and paperwork makes it hard for companies to create new things
							quickly. We should make the process simpler while still keeping things safe and fair.
							This will help new ideas grow faster.
						</p>
					</div>
				</div>
				<div
					class="features-card-box bg-[#FFF1EE] border border-orange-300/50 rounded-xl p-6 flex flex-col gap-y-6"
				>
					<div class="flex flex-col card-content gap-y-2">
						<p class="text-xl">🤷</p>
						<h3 class="text-xl font-semibold lg:text-2xl">Unclear rules cause unfair treatment</h3>
						<p class="text-base text-[#7c7c7c] font-medium">
							When laws are not clear, they can be used differently for different people or
							companies. This isn't fair. Some might get in trouble while others find ways around
							the rules. We need clear rules so everyone is treated the same way.
						</p>
					</div>
				</div>
				<div
					class="features-card-box bg-[#FFF1EE] border border-orange-300/50 rounded-xl p-6 flex flex-col gap-y-6"
				>
					<div class="flex flex-col card-content gap-y-2">
						<p class="text-xl">💸</p>
						<h3 class="text-xl font-semibold lg:text-2xl">Yearly fees hurt small new companies</h3>
						<p class="text-base text-[#7c7c7c] font-medium">
							Making small, new companies pay for licenses every year can be too expensive for them.
							This might stop them from trying new ideas. We should make it easier and cheaper for
							these small companies to join in and create new things.
						</p>
					</div>
				</div>
				<div
					class="features-card-box bg-[#FFF1EE] border border-orange-300/50 rounded-xl p-6 flex flex-col gap-y-6"
				>
					<div class="flex flex-col card-content gap-y-2">
						<p class="text-xl">❓</p>
						<h3 class="text-xl font-semibold lg:text-2xl">
							Not knowing what's expected causes worry
						</h3>
						<p class="text-base text-[#7c7c7c] font-medium">
							When companies don't know exactly what rules to follow, they might be afraid to try
							new things. We need to make clear guidelines so everyone knows what's expected. This
							will help companies create new technology without worrying about getting in trouble
							unfairly.
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>

	<div class="flex items-center justify-center w-full">
		<a href="#cta" class="btn btn-primary">Create Awareness</a>
	</div>
</section>

<!-- testimonials -->
<div class="py-24 sm:py-32">
	<div class="px-6 mx-auto max-w-7xl lg:px-8">
		<div class="max-w-xl mx-auto text-center">
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				<span class="text-primary">You</span> Are Not <span class="text-primary">Alone</span>
			</p>
		</div>
		<div class="flow-root max-w-2xl mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none">
			<div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
				{#each testimonials as testimonial}
					<div class="pt-8 sm:inline-block sm:w-full sm:px-4">
						<figure class="p-8 text-sm leading-6 bg-gray-200 rounded-2xl">
							<blockquote class="text-gray-900">
								{#each testimonial.comments as comment}
									<p>
										{comment}
									</p>
								{/each}
							</blockquote>
							<figcaption class="flex items-center mt-6 gap-x-4">
								<!-- <img
									class="w-10 h-10 rounded-full bg-gray-50"
									src={`https://x.com/${testimonial.handle.substring(1)}/photo`}
									alt={`${testimonial.user}'s Twitter profile picture`}
								/> -->
								<div>
									<div class="font-semibold text-gray-900">{testimonial.user}</div>
									<div class="text-gray-600">{testimonial.handle}</div>
								</div>
							</figcaption>
						</figure>
					</div>
				{/each}
				<!-- More testimonials... -->
			</div>
		</div>
	</div>
</div>

<!-- cta -->
<section class="max-w-5xl px-5 mx-auto cta__section py-14 lg:pb-20 lg:px-0" id="cta">
	<div class="flex flex-col items-center justify-center mx-auto rounded-2xl gap-y-5">
		<h3
			class="max-w-xl mx-auto text-3xl font-bold text-center text-black md:text-4xl lg:text-5xl lg:max-w-3xl"
		>
			<span class="text-primary">Your Move</span>
			Be Part of the Solution
		</h3>
		<p class="text-sm font-medium text-center md:text-base lg:text-lg">
			The future of Kenyan tech is being written. Will you let others decide for you?
		</p>

		<p class="text-3xl lg:text-4xl">👇</p>

		<div class="flex flex-row gap-4">
			<a
				href="https://x.com/intent/post?text=Join+us+in+rejecting+the+Robotics+and+AI+Bill+2024+created+by+@fsagwe+@KenyaRobotics+@kennedykwangari!&hashtags=RejectRoboticsAndAIBill2024&url=https%3A%2F%2Freject-robotics-ai.vercel.app%2F"
				class="btn btn-primary"
				target="_blank"
			>
				Share On Twitter
			</a>
			<a
				href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Freject-robotics-ai.vercel.app%2F"
				class="btn btn-primary"
				target="_blank"
				rel="noopener noreferrer"
			>
				Share On LinkedIn
			</a>
			<a
				href="https://docs.google.com/document/d/16vyCQVNbOZzlyN8PvnfF9B8JroeAxBMv/edit?usp=sharing&ouid=113687490993866143845&rtpof=true&sd=true"
				class="btn btn-primary">Read the bill</a
			>
		</div>
	</div>
</section>
