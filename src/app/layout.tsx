import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Footer from "@/components/footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Klipper Tools',
    description: 'Klipper Tools, a collection of tools for Klipper | Made by @otancz',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
