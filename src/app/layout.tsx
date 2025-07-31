import type {Metadata} from "next";
// @ts-ignore
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


//
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Todolist App",
    description: "Simple Todolist App with Next.js",
};


export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
