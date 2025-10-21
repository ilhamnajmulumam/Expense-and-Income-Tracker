'use client';

import { BBHSansBogle, robotoMono } from '@/app/ui/fonts/font';

export default function HeroSection() {
    return (
        <section className="w-screen py-20 mt-10 bg-gradient-to-b from-green-400 to-white flex justify-center">
            <div className="md:h-[80vh] md:flex-row flex flex-col items-center max-w-7xl">
                <div className="p-10 mx-auto space-y-8">
                    <header>
                        <h1
                            className={`${BBHSansBogle.className} text-4xl text-black`}
                        >
                            Welcome to My Blog
                        </h1>
                        <p
                            className={`${robotoMono.className} mt-4 text-sm text-black`}
                        >
                            Your daily dose of tech insights and tutorials.
                        </p>
                    </header>

                    <div className="grid gap-6">
                        <div className={`${robotoMono.className} text-black`}>
                            <p className="mb-4">
                                This blog covers a wide range of topics from
                                JavaScript tips and Next.js patterns to design
                                and tooling. Expect in-depth tutorials, quick
                                tips, and practical examples you can use right
                                away.
                            </p>
                            <p>
                                New posts are added regularly — dive into the
                                archives below or subscribe to get updates
                                delivered to your inbox.
                            </p>
                        </div>
                    </div>
                    <button className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition">
                        Explore the Blog
                    </button>
                </div>
                <div className="border p-10">
                    <div className="w-[350px] h-[350px] bg-white  rounded-2xl"></div>
                    {/* Placeholder for future image or graphic */}
                </div>
            </div>
        </section>
    );
}
