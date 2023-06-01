import Link from "next/link";
import Image from "next/image";

export default function About() {
	return (
		<main className="relative max-w-full overflow-x-hidden">
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
				<Link className="font-bold" href={"/about"}>
					About Us
				</Link>
				<Link href={"/learning"}>Learning Resources</Link>
				<Link href={"/employees"}>Jobs & Vacancies</Link>
			</div>

			<div className="flex flex-col md:flex-row justify-around mt-20 p-5">
				<div className="self-center">
					<h1 className="font-bold text-6xl">About Us</h1>
					<p className="max-w-md pt-0.5 text-stone-800">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat.
					</p>
				</div>

				<div className="bg-white/50 drop-shadow-md backdrop-blur-lg max-w-lg rounded-md mt-5 md:pt-0 hidden sm:flex">
					<div className="flex justify-center px-4">
						<img
							className="m-4 overflow-clip rounded-md bg-clip-padding"
							src="https://picsum.photos/500/300"
							alt="random"
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-col mt-16 px-8 lg:px-32">
				<p className="font-bold text-2xl">Lorem Ipsum</p>
				<p className="max-w-2xl md:max-w-6xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id
					velit ut tortor. Maecenas volutpat blandit aliquam etiam erat velit.
					Sed odio morbi quis commodo odio aenean sed. Sit amet consectetur
					adipiscing elit ut aliquam purus. Cum sociis natoque penatibus et
					magnis. Amet luctus venenatis lectus magna fringilla urna porttitor
					rhoncus. Faucibus nisl tincidunt eget nullam non nisi. Augue eget arcu
					dictum varius duis at consectetur lorem donec. Vel pretium lectus quam
					id leo in vitae. Purus ut faucibus pulvinar elementum integer enim
					neque volutpat. Habitasse platea dictumst vestibulum rhoncus est
					pellentesque elit ullamcorper dignissim. Ultricies leo integer
					malesuada nunc vel risus commodo viverra. Ut diam quam nulla porttitor
					massa id neque aliquam vestibulum. Pellentesque habitant morbi
					tristique senectus et netus et malesuada fames. Faucibus ornare
					suspendisse sed nisi.
				</p>
			</div>
		</main>
	);
}
