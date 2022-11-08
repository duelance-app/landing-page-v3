import React from "react";

function FeaturesBlocks() {
    return (
        <section className="relative">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-8 md:py-16">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8">
                        <h2 className="h2 mb-4 text-scheme-black">
                            How Duelance Works
                        </h2>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
                        {/* 1st item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-12 h-12 pt-0.5 pr-1">
                                    <svg
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
                                </div>
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Sign Up
                            </h4>
                            <p className="text-gray-600 text-center">
                                Create an account on the platform and fill out your business/individual details.
                            </p>
                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-12 h-12 pt-0.5">
                                    <svg
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
                                </div>
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Post Your Job
                            </h4>
                            <p className="text-gray-600 text-center">
                                Tell us exactly what you want. We provide a strict template to get as much detail as possible.
                            </p>
                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-12 h-12 pt-0.5">
                                    <svg
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
                                </div>
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Sit Back & Relax
                            </h4>
                            <p className="text-gray-600 text-center">
                                Our platform does the heavylifting now. We'll show you submissions/freelancer profiles depending on the type of the job.
                            </p>
                        </div>

                        {/* 4th item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-12 h-12">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ionicon"
                                        viewBox="0 0 512 512"
                                    >
                                        <title>Alarm</title>
                                        <path
                                            d="M416.07 272a160 160 0 10-160 160 160 160 0 00160-160zM142.12 91.21A46.67 46.67 0 00112 80l-2.79.08C83.66 81.62 64 104 64.07 131c0 13.21 4.66 19.37 10.88 27.23a4.55 4.55 0 003.24 1.77h.88a3.23 3.23 0 002.54-1.31L142.38 99a5.38 5.38 0 001.55-4 5.26 5.26 0 00-1.81-3.79zM369.88 91.21A46.67 46.67 0 01400 80l2.79.08C428.34 81.62 448 104 447.93 131c0 13.21-4.66 19.37-10.88 27.23a4.55 4.55 0 01-3.24 1.76h-.88a3.23 3.23 0 01-2.54-1.31L369.62 99a5.38 5.38 0 01-1.55-4 5.26 5.26 0 011.81-3.79z"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-miterlimit="10"
                                            stroke-width="32"
                                        />
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="32"
                                            d="M256.07 160v112h-80M416.07 432l-40-40M96.07 432l40-40"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
                                Pay The Freelancer
                            </h4>
                            <p className="text-gray-600 text-center">
                                Upon receiving satisfactory work, pay the freelancer with the click of a button!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesBlocks;
