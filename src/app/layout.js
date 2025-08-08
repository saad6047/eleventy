import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Eleventy",
    description: "Eleventy web app",
};

export default function RootLayout({ children }) {
    return (
        <ReactQueryClientProvider>
            <html lang="en">
                <body className={inter.className}>
                    <NextTopLoader
                        color="#f10903"
                        initialPosition={0.08}
                        crawlSpeed={200}
                        height={4}
                        crawl={true}
                        showSpinner={false}
                        easing="ease"
                        speed={200}
                        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                        template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                        zIndex={1600}
                        showAtBottom={false}
                    />{" "}
                    {children}
                </body>
            </html>
        </ReactQueryClientProvider>
    );
}
