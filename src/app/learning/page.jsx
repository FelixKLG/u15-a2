import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: "Hot Beans - Learning Resources",
	description: "Professional Website Developers",
};

export default function Page() {
	return (
		<main className="relative max-w-full overflow-x-hidden">
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
				<Link className="font-bold" href={"/learning"}>
					Learning Resources
				</Link>
				<Link href={"/employees"}>Jobs & Vacancies</Link>
			</div>

			<div className="flex flex-col md:flex-row justify-around mt-20 p-5">
				<div className="self-center">
					<h1 className="font-bold text-6xl">Learning Resources</h1>
					<p className="max-w-md pt-0.5 text-stone-800">
						At Hot Beans, we believe in the power of education to shape the
						future of our industry. We are committed to sharing our knowledge
						and expertise with aspiring web designers, developers, and digital
						enthusiasts, nurturing the next generation of talent.
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
					<Link href="https://www.w3schools.com/">
						<h2 className="font-semibold text-lg">
							<span className="hover:text-purple-400">W3Schools</span>
						</h2>
					</Link>
					<p className="text-stone-700">
						W3Schools is a popular resource for learning how to code, they offer
						a wide range of courses to take.
					</p>
				</div>
				<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
					<Link href="https://www.codecademy.com/">
						<h2 className="font-semibold text-lg">
							<span className="hover:text-purple-400">Codecademy</span>
						</h2>
					</Link>
					<p className="text-stone-700">
						Codecademy is a online education platform that offers a range of
						guided courses.
					</p>
				</div>
				<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
					<Link href="https://www.udemy.com/">
						<h2 className="font-semibold text-lg">
							<span className="hover:text-purple-400">Udemy</span>
						</h2>
					</Link>
					<p className="text-stone-700">
						Udemy is an online education platform with a rge of courses for a
						broad selection of subjects.
					</p>
				</div>
				<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
					<Link href="https://www.youtube.com/">
						<h2 className="font-semibold text-lg ">
							<span className="hover:text-purple-400">YouTube</span>
						</h2>
					</Link>
					<p className="text-stone-700">
						YouTube is an infamous web video sharing platform with countless
						hours of educational content.
					</p>
				</div>
				<div className="bg-stone-300/70 w-64 max-w-64 max-h-64 rounded-md p-2">
					<Link href="https://developer.mozilla.org/en-US/">
						<h2 className="font-semibold text-lg">
							<span className="hover:text-purple-400">MDN Web Docs</span>
						</h2>
					</Link>
					<p className="text-stone-700">The Mozilla Web Docs </p>
				</div>
			</div>
		</main>
	);
}
