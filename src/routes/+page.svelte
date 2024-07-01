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
		}
	];
</script>

<!-- top bar -->
<div class="bg-neutral py-1.5 text-center text-xs text-neutral-content md:text-sm">
	<span>
		<span class="font-semibold text-error">Wake-up</span> call!
		<span class="font-semibold text-warning">The Kenya Robotics and AI Society Bill 2023</span>
		is being <span class="font-semibold text-warning">discussed right now.</span> Your future is
		being decided. <span class="font-semibold text-warning">Are you in the room?</span>
	</span>
</div>

<!-- hero section -->
<section class="hero relative isolate">
	<div
		class="w-48 h-48 left-10 top-10 absolute -z-10 bg-red-400 bg-opacity-90 rounded-full blur-[300px]"
	/>
	<div
		class="w-72 h-72 left-20 top-20 absolute -z-10 bg-blue-400 bg-opacity-90 rounded-full blur-[300px]"
	/>
	<div
		class="hero__container max-w-5xl px-5 lg:px-10 mx-auto flex flex-col gap-y-10 items-center justify-between py-10 lg:py-24"
	>
		<div class="hero-content flex items-center justify-center flex-col gap-y-3.5 w-full">
			<h2
				class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl relative font-black max-w- md:max-w-2xl lg:max-w-3xl mx-auto text-center text-zinc-800"
			>
				Shape Kenya's Tech Future: Your Voice Matters!
			</h2>
			<p
				class="font-medium text-center lg:text-left max-w-xs mx-auto lg:max-w-full text-base lg:text-lg"
			>
				The Robotics and AI Bill is here. Are you ready for it?
			</p>
			<a href="#cta" class="btn btn-primary">Create Awareness</a>

			<div class="pt-5 flex items-center jus flex-col gap-y-2 relative">
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
<section class="benefit__section max-w-5xl mx-auto py-10 px-10 lg:px-0">
	<div
		class="headline__container flex flex-col gap-y-5 items-center justify-center max-w-xl mx-auto"
	>
		<h2 class="text-2xl md:text-3xl lg:text-5xl text-center font-bold">
			<span class="text-primary">Imagine</span> a Kenya...
		</h2>
		<p class="text-center text-sm md:text-base lg:text-lg font-medium">
			Where robots assist in healthcare, AI boosts crop yields, and tech innovation creates
			thousands of jobs. This future is within reach, but a new bill could change everything.
		</p>
	</div>
</section>

<!-- opportunity -->
<section class="benefit__section max-w-5xl mx-auto py-10 px-10 lg:px-0">
	<div
		class="headline__container flex flex-col gap-y-5 items-center justify-center max-w-xl mx-auto"
	>
		<h2 class="text-2xl md:text-3xl lg:text-5xl text-center font-bold">
			The <span class="text-primary">Stakes</span> Are <span class="text-primary">High</span>
		</h2>
	</div>
	<div class="flex flex-col max-w-xl mx-auto items-center justify-center gap-y-5 py-10">
		<div class="flex flex-col md:flex-row gap-y-5 items-center justify-center gap-x-5 w-full">
			<div
				class="flex flex-col items-center justify-center gap-y-2 border rounded-lg p-5 py-10 w-full lg:w-1/2"
			>
				<p class="font-semibold text-4xl lg:text-5xl text-primary">133 M</p>
				<p class="text-base lg:text-lg font-medium">
					AI could create 133 million new roles by 2025. Will Kenya be ready?
				</p>
			</div>
			<div
				class="flex flex-col items-center justify-center gap-y-2 border rounded-lg p-5 py-10 w-full lg:w-1/2"
			>
				<p class="font-semibold text-4xl lg:text-5xl text-primary">Millions</p>
				<p class="text-base lg:text-lg font-medium">
					AI diagnostics could save millions of lives. But only if we get the regulations right.
				</p>
			</div>
		</div>
		<div
			class="flex flex-col items-center justify-center gap-y-2 w-full rounded-lg border p-5 py-10"
		>
			<p class="font-semibold text-4xl lg:text-5xl text-primary">Privacy</p>

			<p class="text-base md:text-xl xl:text-2xl font-semibold max-w-sm xl:max-w-md text-center">
				Who controls your data in an AI-driven world? This bill decides
			</p>
		</div>
	</div>
</section>

<!-- promise  -->
<section class="benefit__section max-w-5xl mx-auto py-10 px-10 lg:px-0">
	<div
		class="headline__container flex flex-col gap-y-5 items-center justify-center max-w-xl mx-auto"
	>
		<h2 class="text-2xl md:text-3xl lg:text-5xl text-center font-bold">
			The <span class="text-primary">Promise</span>
		</h2>
	</div>
	<div class="flex flex-col max-w-xl mx-auto items-center justify-center gap-y-5 py-4">
		<section class="feature__section max-w-5xl mx-auto">
			<div class="features-card grid px-10 lg:px-14 xl:px-2 grid-cols-1 gap-10 py-4 lg:py-20">
				<div
					class="features-card-box bg-[#E3F9E5] border border-green-300/50 rounded-xl p-6 flex flex-col gap-y-6"
				>
					<div class="card-content flex flex-col gap-y-2">
						<p class="text-xl">🤞</p>
						<h3 class="text-xl lg:text-2xl font-semibold">
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
</section>

<!-- vs Reality  -->
<section class="benefit__section max-w-5xl mx-auto py-10 px-10 lg:px-0">
	<div
		class="headline__container flex flex-col gap-y-5 items-center justify-center max-w-xl mx-auto"
	>
		<h2 class="text-2xl md:text-3xl lg:text-5xl text-center font-bold">
			vs <span class="text-primary">Reality</span>
		</h2>
	</div>
	<div class="flex flex-col max-w-xl mx-auto items-center justify-center gap-y-5 py-10">
		<section class="feature__section max-w-5xl mx-auto">
			<div class="features-card grid px-10 lg:px-14 xl:px-2 grid-cols-1 gap-10 py-4 lg:py-20">
				<div
					class="features-card-box bg-[#FFF1EE] border border-orange-300/50 rounded-xl p-6 flex flex-col gap-y-6"
				>
					<div class="card-content flex flex-col gap-y-2">
						<p class="text-xl">📜</p>
						<h3 class="text-xl lg:text-2xl font-semibold">
							Excessive bureaucracy stifling innovation
						</h3>
						<p class="text-base text-[#7c7c7c] font-medium">
							Excessive bureaucratic processes and red tape can slow down the pace of innovation and
							make it difficult for companies to bring new technologies to market. Streamlining
							regulatory processes and reducing unnecessary paperwork can help foster a more dynamic
							and innovative environment while still ensuring safety and ethical standards are met.
						</p>
					</div>
				</div>
				<div
					class="features-card-box bg-[#FFF1EE] border border-orange-300/50 rounded-xl p-6 flex flex-col gap-y-6"
				>
					<div class="card-content flex flex-col gap-y-2">
						<p class="text-xl">🤷</p>
						<h3 class="text-xl lg:text-2xl font-semibold">
							Vague definitions leading to unfair application
						</h3>
						<p class="text-base text-[#7c7c7c] font-medium">
							Legislation with vague or broad definitions can lead to inconsistent application and
							enforcement, creating an uneven playing field. This lack of clarity can result in some
							entities being unfairly penalized while others may exploit loopholes. It is crucial
							that the bill includes precise definitions to ensure fair and uniform application
							across the industry.
						</p>
					</div>
				</div>
				<div
					class="features-card-box bg-[#FFF1EE] border border-orange-300/50 rounded-xl p-6 flex flex-col gap-y-6"
				>
					<div class="card-content flex flex-col gap-y-2">
						<p class="text-xl">💸</p>
						<h3 class="text-xl lg:text-2xl font-semibold">
							Yearly licensing burdening small startups
						</h3>
						<p class="text-base text-[#7c7c7c] font-medium">
							Requiring annual licenses for AI and robotics development could place a significant
							financial and administrative burden on small startups. This could discourage
							innovation and entrepreneurship, as smaller companies may not have the resources to
							meet these ongoing requirements. Instead, a more flexible licensing approach or
							reduced fees for startups might encourage more participation in the AI sector.
						</p>
					</div>
				</div>
				<div
					class="features-card-box bg-[#FFF1EE] border border-orange-300/50 rounded-xl p-6 flex flex-col gap-y-6"
				>
					<div class="card-content flex flex-col gap-y-2">
						<p class="text-xl">❓</p>
						<h3 class="text-xl lg:text-2xl font-semibold">
							Lack of clear standards creating uncertainty
						</h3>
						<p class="text-base text-[#7c7c7c] font-medium">
							Without clear and precise standards, businesses and developers may face uncertainty
							about compliance requirements, which can hinder innovation and investment. Clear
							guidelines are essential to ensure that stakeholders understand what is expected and
							can develop technologies that meet these standards without fear of arbitrary
							enforcement or penalties.
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>

<!-- testimonials -->
<div class=" py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-xl text-center">
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				<span class="text-primary">You</span> Are Not <span class="text-primary">Alone</span>
			</p>
		</div>
		<div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
			<div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
				{#each testimonials as testimonial}
					<div class="pt-8 sm:inline-block sm:w-full sm:px-4">
						<figure class="rounded-2xl bg-gray-200 p-8 text-sm leading-6">
							<blockquote class="text-gray-900">
								{#each testimonial.comments as comment}
									<p>
										{comment}
									</p>
								{/each}
							</blockquote>
							<figcaption class="mt-6 flex items-center gap-x-4">
								<!-- <img
									class="h-10 w-10 rounded-full bg-gray-50"
									src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
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
<section class="cta__section max-w-5xl mx-auto py-14 lg:pb-20 px-5 lg:px-0" id="cta">
	<div class="rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center">
		<h3
			class="text-3xl md:text-4xl lg:text-5xl max-w-xl lg:max-w-3xl mx-auto font-bold text-black text-center"
		>
			<span class="text-primary">Your Move</span>
			Be Part of the Solution
		</h3>
		<p class="text-center text-sm md:text-base lg:text-lg font-medium">
			The future of Kenyan tech is being written. Will you let others decide for you?
		</p>

		<p class="text-3xl lg:text-4xl">👇</p>

		<div class="flex flex-row gap-4">
			<a
				href="https://twitter.com/intent/tweet?text=Join%20us%20in%20rejecting%20the%20Robotics%20and%20AI%20Bill%202024!&hashtags=RejectRoboticsAndAIBill2024"
				class="btn btn-primary"
				target="_blank">Share On Twitter</a
			>
			<a
				href="https://docs.google.com/document/d/16vyCQVNbOZzlyN8PvnfF9B8JroeAxBMv/edit?usp=sharing&ouid=113687490993866143845&rtpof=true&sd=true"
				class="btn btn-primary">Read the bill</a
			>
		</div>
	</div>
</section>
