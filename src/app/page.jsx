import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="relative max-w-full overflow-x-hidden">
			<div className="absolute -z-10 bg-purple-300/50 m-screen w-screen h-[270px] -rotate-6 scale-x-105 scale-y-150 -translate-y-14" />

			<div className="p-2 flex flex-row items-center gap-2 md:gap-5 text-center">
				<Link href="/">
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
				<Link href={"/employees"}>Jobs & Vacancies</Link>
			</div>

			<div className="flex flex-col md:flex-row justify-around mt-20 m-5">
				<div className="self-center">
					<h1 className="font-bold text-6xl">Hot Beans</h1>
					<p className="max-w-md pt-0.5 text-stone-800">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat.
					</p>
					<Link
						className="flex w-fit mt-3 px-4 py-2 rounded bg-purple-600 text-purple-100 hover:bg-purple-500 hover:text-purple-50 transition duration-200 active:ring-2 ring-purple-600/50"
						href={"/about"}
					>
						About Us
					</Link>
				</div>

				<div className="bg-white/50 drop-shadow-md backdrop-blur-lg max-w-lg rounded-md mt-5 md:pt-0">
					<div className="h-14 bg-white drop-shadow-md rounded-t-md flex">
						<span className="font-semibold text-xl self-center pl-4">
							Lorem Ipsum
						</span>
					</div>
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

			<div className="flex flex-col items-center mt-24">
				<span className="font-medium text-lg">Lorem Ipsum</span>
				<div className="flex flex-auto gap-4 mt-2 overflow-x-scroll">
					<Image
						height={96}
						width={96}
						className="h-24 overflow-clip rounded-md bg-clip-padding "
						src="https://picsum.photos/100/100"
						alt="random"
					/>
					<Image
						height={96}
						width={96}
						className="h-24 overflow-clip rounded-md bg-clip-padding "
						src="https://picsum.photos/100/100"
						alt="random"
					/>
					<Image
						height={96}
						width={96}
						className="h-24 overflow-clip rounded-md bg-clip-padding "
						src="https://picsum.photos/100/100"
						alt="random"
					/>
					<Image
						height={96}
						width={96}
						className="h-24 overflow-clip rounded-md bg-clip-padding "
						src="https://picsum.photos/100/100"
						alt="random"
					/>
					<Image
						height={96}
						width={96}
						className="h-24 overflow-clip rounded-md bg-clip-padding "
						src="https://picsum.photos/100/100"
						alt="random"
					/>
				</div>
			</div>
		</main>
	);
}
