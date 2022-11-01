import React from "react";

function FeaturesBlocks() {
    return (
        <section className="relative">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-8 md:py-16">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4 text-scheme-black">
                            How Duelance works
                        </h2>
                        <p className="text-xl text-gray-600">
                            // TODO Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur excepteur sint occaecat cupidatat.
                        </p>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
                        {/* 1st item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                            <svg
                                className="w-16 h-16 p-1 -mt-1 mb-2"
                                xmlns="http://www.w3.org/2000/svg"
                                class="ionicon"
                                viewBox="0 0 512 512"
                            >
                                <title>Log In</title>
                                <path
                                    d="M192 176v-40a40 40 0 0140-40h160a40 40 0 0140 40v240a40 40 0 01-40 40H240c-22.09 0-48-17.91-48-40v-40"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M288 336l80-80-80-80M80 256h272"
                                />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Sign up
                            </h4>
                            <p className="text-gray-600 text-center">
                                // TODO Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                            <svg
                                className="w-16 h-16 p-1 -mt-1 mb-2"
                                xmlns="http://www.w3.org/2000/svg"
                                class="ionicon"
                                viewBox="0 0 512 512"
                            >
                                <title>Checkmark</title>
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M416 128L192 384l-96-96"
                                />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Get Pre-vetted
                            </h4>
                            <p className="text-gray-600 text-center">
                                // TODO Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                            <svg
                                className="w-16 h-16 p-1 -mt-1 mb-2"
                                xmlns="http://www.w3.org/2000/svg"
                                class="ionicon"
                                viewBox="0 0 512 512"
                            >
                                <title>Checkmark Done</title>
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"
                                />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Get Vetted
                            </h4>
                            <p className="text-gray-600 text-center">
                                // TODO Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </div>

                        {/* 4th item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                            <svg
                                className="w-16 h-16 p-1 -mt-1 mb-2"
                                xmlns="http://www.w3.org/2000/svg"
                                class="ionicon"
                                viewBox="0 0 512 512"
                            >
                                <title>Desktop</title>
                                <rect
                                    x="32"
                                    y="64"
                                    width="448"
                                    height="320"
                                    rx="32"
                                    ry="32"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                />
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M304 448l-8-64h-80l-8 64h96z"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M368 448H144"
                                />
                                <path d="M32 304v48a32.09 32.09 0 0032 32h384a32.09 32.09 0 0032-32v-48zm224 64a16 16 0 1116-16 16 16 0 01-16 16z" />
                            </svg>
                            <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
                                Get to Work!
                            </h4>
                            <p className="text-gray-600 text-center">
                                // TODO Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesBlocks;
