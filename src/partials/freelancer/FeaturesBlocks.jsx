import React from "react";

function FeaturesBlocks() {
    return (
        <section className="relative">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-8 md:py-16">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8">
                        <h2 className="h2 mb-4 text-scheme-black">
                            You’ll Love Us. Here’s Why.
                        </h2>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
                        {/* 1st item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-8 h-8 mt-0.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ionicon"
                                        viewBox="0 0 512 512"
                                    >
                                        <title>Wallet</title>
                                        <path d="M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104zM415.5 128h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
                                        <path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z" />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Simple Subscription, No Commission
                            </h4>
                            <p className="text-gray-600 text-center">
                                Our platform doesn’t charge commissions, so that
                                you get to take more home. Pay a fixed monthly
                                price and work on as many projects as you want
                                to! It’s 5-10x cheaper!
                            </p>
                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-8 h-8 mt-0.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ionicon"
                                        viewBox="0 0 512 512"
                                    >
                                        <title>Search</title>
                                        <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Get Work, Don't Search For It
                            </h4>
                            <p className="text-gray-600 text-center">
                                Our platform intelligently matches and shows
                                your projects that suit your skill level and
                                expertise. Just click one button to accept or
                                reject a job. Jobs come to you, you don’t look
                                for them :)
                            </p>
                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-8 h-8 mt-0.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ionicon"
                                        viewBox="0 0 512 512"
                                    >
                                        <title>Cash</title>
                                        <path d="M448 400H64a16 16 0 010-32h384a16 16 0 010 32zM416 448H96a16 16 0 010-32h320a16 16 0 010 32zM32 272H16v48a32 32 0 0032 32h48v-16a64.07 64.07 0 00-64-64z" />
                                        <path d="M480 240h16v-64h-16a96.11 96.11 0 01-96-96V64H128v16a96.11 96.11 0 01-96 96H16v64h16a96.11 96.11 0 0196 96v16h256v-16a96.11 96.11 0 0196-96zm-224 64a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                                        <circle cx="256" cy="208" r="64" />
                                        <path d="M416 336v16h48a32 32 0 0032-32v-48h-16a64.07 64.07 0 00-64 64zM480 144h16V96a32 32 0 00-32-32h-48v16a64.07 64.07 0 0064 64zM96 80V64H48a32 32 0 00-32 32v48h16a64.07 64.07 0 0064-64z" />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Get Paid, No Matter What
                            </h4>
                            <p className="text-gray-600 text-center">
                                Never ever get scammed again. We ensure that you
                                get paid on submitting satisfactory work, no
                                matter what. We will pay you if the client
                                doesn’t.
                            </p>
                        </div>

                        {/* 4th item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-8 h-8 mt-0.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ionicon"
                                        viewBox="0 0 512 512"
                                    >
                                        <title>Trending Up</title>
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="32"
                                            d="M352 144h112v112"
                                        />
                                        <path
                                            d="M48 368l121.37-121.37a32 32 0 0145.26 0l50.74 50.74a32 32 0 0045.26 0L448 160"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="32"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
                                Just Move Up, No Race To The Bottom
                            </h4>
                            <p className="text-gray-600 text-center">
                                Stop building websites for $5. Work on projects
                                that value your contribution and don’t lowball
                                you. We hate to see freelancers undervaluing
                                themselves and working for pennies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesBlocks;
