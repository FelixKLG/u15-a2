import Script from "next/script";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Hot Beans",
	description: "Professional Website Developers",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Script
				strategy="afterInteractive"
				async={true}
				src="https://aly.felixklg.dev/VwDrVUy9RFqbFd6"
				data-website-id="5cc477cc-029c-463f-b859-7e008595bcfd"
			/>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
