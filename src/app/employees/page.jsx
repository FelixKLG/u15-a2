import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: "Hot Beans - Jobs & Vacancies",
	description: "Professional Website Developers",
};

export default function Page() {
	return (
		<main className="relative max-w-full overflow-x-hidden mb-5">
			<div className="absolute -z-10 bg-purple-300/50 m-screen w-screen h-[270px] -rotate-6 scale-x-105 scale-y-150 -translate-y-14" />

			<div className="p-2 flex flex-row items-center gap-2 md:gap-5 text-center">
				<Link href={"/"}>
					<Image
						width={44}
						height={44}
						className="h-11 rounded-md"
						src="/bean.png"
						alt="Website Logo"
					/>
				</Link>
				<Link href={"/about"}>About Us</Link>
				<Link href={"/learning"}>Learning Resources</Link>
				<Link className="font-bold" href={"/employees"}>
					Jobs & Vacancies
				</Link>
			</div>

			<div className="flex flex-col md:flex-row justify-around mt-20 p-5">
				<div className="self-center">
					<h1 className="font-bold text-6xl">Jobs & Vacancies</h1>
					<p className="max-w-md pt-0.5 text-stone-800">
						In the vibrant tapestry of Hot Beans, our employees are the vibrant
						threads that bring our company to life. They are the heartbeat of
						our organization, embodying the values and spirit that make Hot
						Beans a trusted name in the industry.
					</p>
				</div>

				<div className="bg-white/50 drop-shadow-md backdrop-blur-lg max-w-lg rounded-md mt-5 md:pt-0 hidden sm:flex">
					<div className="flex justify-center px-4">
						<Image
							width={500}
							height={300}
							className="m-4 overflow-clip rounded-md bg-clip-padding"
							src="https://picsum.photos/500/300"
							alt="random"
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-col md:flex-row justify-center mx-16 mt-20 gap-5">
				<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
					<div className="flex flex-row">
						<Image
							width={64}
							height={64}
							className="rounded-md"
							src="/persons/1e84459ce6beb3599843d4ab40c27561.png"
							alt="Linder Profile Picture"
						/>
						<div className="flex flex-col justify-center ml-2 overflow-hidden">
							<span className="font-bold">Linder</span>
							<span className="font-light truncate">
								Sr. Fullstack Developer
							</span>
						</div>
					</div>
					<hr className="my-2 border-stone-400/50" />
					<p className="text-stone-700">Interests: Rust & WASM</p>
				</div>
				<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
					<div className="flex flex-row">
						<Image
							width={64}
							height={64}
							className="rounded-md"
							src="/persons/8c9f4ae2a222cbac75cf8a2fe1a0cdc7.png"
							alt="Betty Profile Picture"
						/>
						<div className="flex flex-col justify-center ml-2 overflow-hidden">
							<span className="font-bold">Betty</span>
							<span className="font-light truncate">Project Manager</span>
						</div>
					</div>
					<hr className="my-2 border-stone-400/50" />
					<p className="text-stone-700">Passions: Work Life Balance</p>
				</div>
				<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
					<div className="flex flex-row">
						<Image
							width={64}
							height={64}
							className="rounded-md"
							src="/persons/46fcf2bffb7385b02a2b596fab6dd5ee.png"
							alt="Eugene Profile Picture"
						/>
						<div className="flex flex-col justify-center ml-2 overflow-hidden">
							<span className="font-bold">Eugene</span>
							<span className="font-light truncate">
								Jr. Frontend Developer
							</span>
						</div>
					</div>
					<hr className="my-2 border-stone-400/50" />
					<p className="text-stone-700">Interests: SSR & TailwindCSS</p>
				</div>
				<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
					<div className="flex flex-row">
						<Image
							width={64}
							height={64}
							className="rounded-md"
							src="/persons/b46436b230499ca12141f334fa3a2754.png"
							alt="Margaret Profile Picture"
						/>
						<div className="flex flex-col justify-center ml-2 overflow-hidden">
							<span className="font-bold">Margaret</span>
							<span className="font-light truncate">Analytics Specialist</span>
						</div>
					</div>
					<hr className="my-2 border-stone-400/50" />
					<p className="text-stone-700">Passions: Privacy</p>
				</div>
				<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
					<div className="flex flex-row">
						<Image
							width={64}
							height={64}
							className="rounded-md"
							src="/persons/IMG_4050.jpg"
							alt="Martha Profile Picture"
						/>
						<div className="flex flex-col justify-center ml-2 overflow-hidden">
							<span className="font-bold">Martha</span>
							<span className="font-light truncate">
								Integrations Specialist
							</span>
						</div>
					</div>
					<hr className="my-2 border-stone-400/50" />
					<p className="text-stone-700">Interests: Browser Engines</p>
				</div>
			</div>

			<div className="flex flex-col justify-center mt-20">
				<h2 className="font-bold flex self-center text-xl">Vacancies</h2>
				<div className="flex flex-col md:flex-row justify-center mx-16 mt-2 gap-5">
					<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
						<div className="flex flex-row">
							<Image
								width={64}
								height={64}
								className="rounded-md"
								src="/basic-profile.png"
								alt="Martha Profile Picture"
							/>
							<div className="flex flex-col justify-center ml-2 overflow-hidden">
								<span className="font-bold truncate">Serveless Developer</span>
								<span className="font-light truncate">£48,000/annum</span>
							</div>
						</div>
						<hr className="my-2 border-stone-400/50" />
						<div className="flex flex-col">
							<h3>
								<span className="font-medium">Requirements:</span>
							</h3>
							<ul className="pl-2 list-disc list-inside">
								<li className="text-stone-700">AWS Lambda</li>
								<li className="text-stone-700">NodeJS</li>
								<li className="text-stone-700">php</li>
								<li className="text-stone-700">Golang</li>
							</ul>
						</div>
					</div>
					<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
						<div className="flex flex-row">
							<Image
								width={64}
								height={64}
								className="rounded-md"
								src="/basic-profile.png"
								alt="Martha Profile Picture"
							/>
							<div className="flex flex-col max-h-20 justify-center ml-2 overflow-hidden">
								<span className="font-bold truncate">Monolithic Developer</span>
								<span className="font-light truncate">£60,000/annum</span>
							</div>
						</div>
						<hr className="my-2 border-stone-400/50" />
						<div className="flex flex-col">
							<h3>
								<span className="font-medium">Requirements:</span>
							</h3>
							<ul className="pl-2 list-disc list-inside">
								<li className="text-stone-700">Rust</li>
								<li className="text-stone-700">CockroachDB / TiDB</li>
								<li className="text-stone-700">Golang</li>
								<li className="text-stone-700">TypeScript</li>
							</ul>
						</div>
					</div>
					<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
						<div className="flex flex-row">
							<Image
								width={64}
								height={64}
								className="rounded-md"
								src="/basic-profile.png"
								alt="Martha Profile Picture"
							/>
							<div className="flex flex-col justify-center ml-2 overflow-hidden">
								<span className="font-bold truncate">Apprenticeship</span>
								<span className="font-light truncate">£30,000/annum</span>
							</div>
						</div>
						<hr className="my-2 border-stone-400/50" />
						<div className="flex flex-col">
							<h3>
								<span className="font-medium">Requirements:</span>
							</h3>
							<ul className="pl-2 list-disc list-inside">
								<li className="text-stone-700">Basic Programming</li>
								<li className="text-stone-700 truncate">JavaScript / Python</li>
								<li className="text-stone-700">Flexible Hours</li>
								<li className="text-stone-700">Willing to learn</li>
							</ul>
						</div>
					</div>
					<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
						<div className="flex flex-row">
							<Image
								width={64}
								height={64}
								className="rounded-md"
								src="/basic-profile.png"
								alt="Martha Profile Picture"
							/>
							<div className="flex flex-col justify-center ml-2 overflow-hidden">
								<span className="font-bold">Php Developer</span>
								<span className="font-light truncate">£50,000/annum</span>
							</div>
						</div>
						<hr className="my-2 border-stone-400/50" />
						<div className="flex flex-col">
							<h3>
								<span className="font-medium">Requirements:</span>
							</h3>
							<ul className="pl-2 list-disc list-inside">
								<li className="text-stone-700">Php</li>
								<li className="text-stone-700">Laravel / Symphony</li>
								<li className="text-stone-700">NodeJS</li>
								<li className="text-stone-700">Git</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<div className="flex flex-col justify-center mt-10 border-2 p-2 border-double rounded-lg max-w-2xl">
					<h2 className="font-semibold text-2xl self-center text-stone-700">
						Application Form
					</h2>
					<form className="flex flex-col justify-center">
						<div className="grid grid-cols-2 gap-3 w-lg self-center p-4 rounded-sm">
							<div className="flex flex-col">
								<label className="font-medium">Name</label>
								<input
									className="border-stone-300 p-1 focus:outline-none focus:border-stone-400 border-2 rounded-md"
									type="text"
								/>
							</div>
							<div className="flex flex-col">
								<label className="font-medium">Email</label>
								<input
									className="border-stone-300 p-1 focus:outline-none focus:border-stone-400 border-2 rounded-md"
									type="text"
								/>
							</div>
							<div className="flex flex-col">
								<label className="font-medium">Telephone</label>
								<input
									className="border-stone-300 p-1 focus:outline-none focus:border-stone-400 border-2 rounded-md"
									type="text"
								/>
							</div>
							<div className="flex flex-col">
								<label className="font-medium">Notes</label>
								<input
									className="border-stone-300 p-1 focus:outline-none focus:border-stone-400 border-2 rounded-md"
									type="text"
								/>
							</div>
						</div>
						<div className="self-center">
							<input
								value="Submit"
								className="focus:outline-none focus:border-2 rounded-md py-1 px-3 border border-white/50 bg-purple-600 text-purple-100 hover:bg-purple-500 hover:text-purple-50 transition duration-200 active:ring-2 ring-purple-600/50"
								type="submit"
							/>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
