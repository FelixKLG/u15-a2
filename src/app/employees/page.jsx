import Image from "next/image";
import Link from "next/link";

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
						src="https://picsum.photos/256/256"
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat.
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
							src="/1e84459ce6beb3599843d4ab40c27561.png"
							alt="Linder Profile Picture"
						/>
						<div className="flex flex-col justify-center ml-2">
							<span className="font-bold">Linder</span>
							<span className="font-light truncate">Rust®️ Developer</span>
						</div>
					</div>
					<hr className="my-2 border-stone-400/50" />
					<p className="text-stone-700">11/10 Coder</p>
				</div>
				<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
					<div className="flex flex-row">
						<Image
							width={64}
							height={64}
							className="rounded-md"
							src="/8c9f4ae2a222cbac75cf8a2fe1a0cdc7.png"
							alt="Betty Profile Picture"
						/>
						<div className="flex flex-col justify-center ml-2">
							<span className="font-bold">Betty</span>
							<span className="font-light truncate">CSS Do-er</span>
						</div>
					</div>
					<hr className="my-2 border-stone-400/50" />
					<p className="text-stone-700">1/10 Coder</p>
				</div>
				<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
					<div className="flex flex-row">
						<Image
							width={64}
							height={64}
							className="rounded-md"
							src="/46fcf2bffb7385b02a2b596fab6dd5ee.png"
							alt="Eugene Profile Picture"
						/>
						<div className="flex flex-col justify-center ml-2">
							<span className="font-bold">Eugene</span>
							<span className="font-light truncate">Kernel Developer</span>
						</div>
					</div>
					<hr className="my-2 border-stone-400/50" />
					<p className="text-stone-700">7/10 Coder</p>
				</div>
				<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
					<div className="flex flex-row">
						<Image
							width={64}
							height={64}
							className="rounded-md"
							src="/b46436b230499ca12141f334fa3a2754.png"
							alt="Margaret Profile Picture"
						/>
						<div className="flex flex-col justify-center ml-2">
							<span className="font-bold">Margaret</span>
							<span className="font-light truncate">Java-CPU Developer</span>
						</div>
					</div>
					<hr className="my-2 border-stone-400/50" />
					<p className="text-stone-700">-500/10 Coder</p>
				</div>
				<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
					<div className="flex flex-row">
						<Image
							width={64}
							height={64}
							className="rounded-md"
							src="/IMG_4050.jpg"
							alt="Martha Profile Picture"
						/>
						<div className="flex flex-col justify-center ml-2">
							<span className="font-bold">Martha</span>
							<span className="font-light truncate">Python Skid</span>
						</div>
					</div>
					<hr className="my-2 border-stone-400/50" />
					<p className="text-stone-700">Blocked & Reported</p>
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
							<div className="flex flex-col justify-center ml-2">
								<span className="font-bold">Senior Developer</span>
								<span className="font-light truncate">1 Dabloon</span>
							</div>
						</div>
						<hr className="my-2 border-stone-400/50" />
						<p className="text-stone-700">90yrs experience in React</p>
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
							<div className="flex flex-col justify-center ml-2">
								<span className="font-bold">Junior Developer</span>
								<span className="font-light truncate">£Fish🐠</span>
							</div>
						</div>
						<hr className="my-2 border-stone-400/50" />
						<p className="text-stone-700">Leetcode required</p>
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
							<div className="flex flex-col justify-center ml-2">
								<span className="font-bold">Coffee Intern</span>
								<span className="font-light truncate">Experience</span>
							</div>
						</div>
						<hr className="my-2 border-stone-400/50" />
						<p className="text-stone-700">Must have long legs</p>
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
							<div className="flex flex-col justify-center ml-2">
								<span className="font-bold">K9 Mascot</span>
								<span className="font-light truncate">£2 per annum</span>
							</div>
						</div>
						<hr className="my-2 border-stone-400/50" />
						<p className="text-stone-700">Must be a good boy</p>
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
