import Link from "next/link";
import Image from "next/image";

export const metadata = {
	title: "Hot Beans - About Us",
	description: "Professional Website Developers",
};

export default function About() {
	return (
		<main className="relative max-w-full overflow-x-hidden pb-5">
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
						Welcome to Hot Beans, a forward-thinking web design company
						dedicated to transforming your online presence. With a passion for
						creativity and a commitment to excellence, we specialize in crafting
						captivating websites that captivate, engage, and inspire.
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

			<div className="flex flex-col mt-16 px-8 lg:px-32">
				<h2 className="font-bold text-2xl">About Us</h2>
				<div className="max-w-2xl md:max-w-4xl pt-1 justify-end">
					<h3 className="text-lg py-1 text-clip overflow-hidden whitespace-nowrap">
						Our Story: Fuelling Growth Through Innovative Design
					</h3>
					<p className="font-light ml-2">
						Hot Beans was born out of a shared love for design and technology.
						As a team of skilled designers and developers, we recognized the
						immense power of a well-crafted website in today's digital
						landscape. Guided by our vision to empower businesses, we set out on
						a mission to provide exceptional web design solutions that drive
						real results.
					</p>
					<h3 className="text-lg py-1 text-clip overflow-hidden whitespace-nowrap">
						What Sets Us Apart: The Hot Beans Difference
					</h3>
					<p className="font-light ml-2">
						At Hot Beans, we believe that successful web design is a perfect
						blend of artistry and functionality. We bring together a diverse
						team of creative minds who possess an unwavering dedication to
						pushing boundaries and exceeding expectations. With an eye for
						detail and a deep understanding of user experience, we create
						websites that not only look stunning but also deliver a seamless and
						intuitive navigation experience.
					</p>
					<h3 className="text-lg py-1 text-clip overflow-hidden whitespace-nowrap">
						Client-Centric Approach: Your Success is Our Priority
					</h3>
					<p className="font-light ml-2">
						We understand that every business is unique, and we take the time to
						truly understand your goals, brand identity, and target audience.
						Our client-centric approach ensures that we tailor our solutions to
						meet your specific needs, resulting in a website that reflects your
						vision and resonates with your customers.
					</p>
					<h3 className="text-lg py-1 text-clip overflow-hidden whitespace-nowrap">
						Collaboration and Communication: Building Lasting Partnerships
					</h3>
					<p className="font-light ml-2">
						We believe in the power of collaboration. Throughout the design
						process, we work closely with you, fostering open lines of
						communication and welcoming your input at every stage. Your
						satisfaction is our top priority, and we strive to exceed your
						expectations by delivering projects on time and within budget.
						Looking to the
					</p>
					<h3 className="text-lg py-1 text-clip overflow-hidden whitespace-nowrap">
						Future: Embracing Innovation
					</h3>
					<p className="font-light ml-2">
						In the ever-evolving digital landscape, staying ahead requires
						constant innovation. At Hot Beans, we embrace emerging technologies
						and industry trends, ensuring that our designs are not only visually
						stunning but also future-proofed. We are committed to continuously
						enhancing our skills and expertise to provide you with the most
						cutting-edge solutions. Join the Hot Beans
					</p>
					<h3 className="text-lg py-1 text-clip overflow-hidden whitespace-nowrap">
						Family: Ignite Your Online Presence
					</h3>
					<p className="font-light ml-2">
						Today Whether you're a small startup or an established enterprise,
						Hot Beans is here to help you make a bold statement in the digital
						realm. Let us transform your ideas into reality and create a digital
						experience that fuels your growth and success. Get in touch with us
						today and let's embark on this exciting journey together.
					</p>
				</div>
			</div>
		</main>
	);
}
