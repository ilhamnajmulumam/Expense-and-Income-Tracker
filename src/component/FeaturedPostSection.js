import Image from 'next/image';

export default function FeaturedPostSection() {
    return (
        <section className="w-screen py-20 bg-neutral-100 flex justify-left border p-10">
            <div className="flex flex-col max-w-7xl">
                <h2 className="text-2xl text-left font-bold mb-6">
                    Featured Posts
                </h2>

                <div className="bg-white rounded-r-4xl shadow md:flex md:gap-5">
                    <div className="">
                        <Image
                            src="/image/react_js.jpg"
                            alt="react js"
                            fill
                            objectFit="contain"
                            className="rounded-lg mb-4"
                        />
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold mb-2">
                            Getting Started with React and TypeScript: A
                            Comprehensive Guide
                        </h3>
                        <p className="text-gray-600">
                            Learn how to set up a React project with TypeScript,
                            including installation, configuration, and best
                            practices for building robust web applications.
                        </p>
                        <a
                            href="#"
                            className="mt-4 text-blue-500 hover:underline"
                        >
                            Author: John Doe
                        </a>
                        <a
                            href="#"
                            className="mt-4 text-blue-500 hover:underline"
                        >
                            Read More
                        </a>
                        <a
                            href="#"
                            className="mt-4 text-blue-500 hover:underline"
                        >
                            Category: React
                        </a>
                        <a
                            href="#"
                            className="mt-4 text-blue-500 hover:underline"
                        >
                            Published: August 15, 2023
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
