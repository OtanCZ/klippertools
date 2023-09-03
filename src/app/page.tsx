import Image from 'next/image'
import {QuestionMarkCircleIcon, SpeakerWaveIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
    let cards = [
        {
            id: 0,
            title: "Beeper",
            description: "Convert .midi to beeper macros!",
            href: '/beeper',
            icon: <SpeakerWaveIcon/>
        },
        {
            id: 1,
            title: "???",
            description: "Eventually something, maybe.",
            href: '/',
            icon: <QuestionMarkCircleIcon/>
        }
    ]

    return (
        <main className="flex flex-col content-center justify-center w-screen min-h-screen">
            <div className="mt-[5vh] flex flex-col justify-center content-center">
                <h1 className="text-7xl font-bold text-center">Klipper Tools</h1>
                <h2 className="text-3xl font-bold text-gray-600 text-center">Random stuff for Klipper</h2>
            </div>
            <div className={"mt-[20vh] flex content-center justify-center"}>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-5"}>
                    {cards.map((card) => (
                        <Link href={card.href} key={card.id}
                              className={"flex flex-col justify-center content-center bg-secondary rounded-xl p-5 group hover:shadow-2xl transition-all ease-in-out"}>
                            <div
                                className={"flex justify-center content-center h-[15vw] transition-all text-primary group-hover:text-accent ease-in-out"}>
                                {card.icon}
                            </div>
                            <div className={"flex flex-col justify-center content-center"}>
                                <h1 className={"text-2xl font-bold text-center transition-all text-text group-hover:text-accent ease-in-out"}>{card.title}</h1>
                                <h2 className={"text-lg font-bold text-gray-600 text-center"}>{card.description}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={"mt-auto"}>
                <Footer/>
            </div>
        </main>
    )
}
