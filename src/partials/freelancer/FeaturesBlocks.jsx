import React from "react";
import Balancer from "react-wrap-balancer";

function FeaturesBlocks() {
    return (
        <section className="relative">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-8 md:py-16">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8">
                        <h2 className="h2 mb-4 text-scheme-black">
                            <Balancer>You’ll Love Us. Here’s Why.</Balancer>
                        </h2>
                        <p className="text-gray-600 font-medium text-xl">
                            <Balancer>
                                Isn't it weird that writers spend more time
                                applying to jobs than actually writing? We're
                                here to fix it.
                            </Balancer>
                        </p>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
                        {/* 1st item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-2xl">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-8 h-8 mt-0.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                <Balancer>Save 11 Hours a Week</Balancer>
                            </h4>
                            <p className="text-gray-600 text-center">
                                <Balancer>
                                    Stop writing proposals, buying connects, or
                                    mass applying on job boards. Duelance
                                    automatically matches you to jobs, and then
                                    it’s a simple matter of clicking a button to
                                    start working.
                                </Balancer>
                            </p>
                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-2xl">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-8 h-8 mt-0.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                <Balancer>Earn 20% More</Balancer>
                            </h4>
                            <p className="text-gray-600 text-center">
                                <Balancer>
                                    Stop paying outrageous commissions to
                                    platforms. Duelance charges no commissions
                                    to freelancers, so that you can take back
                                    control of your money, and enjoy a higher
                                    net income!
                                </Balancer>
                            </p>
                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-2xl">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-8 h-8 mt-0.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                <Balancer>
                                    Don’t Get Scammed, Ever Again
                                </Balancer>
                            </h4>
                            <p className="text-gray-600 text-center">
                                <Balancer>
                                    Don’t waste tons of hours on a project, only
                                    to get scammed. We ensure that you get paid
                                    on submitting satisfactory work. We’ll pay
                                    you, if the client doesn’t.
                                </Balancer>
                            </p>
                        </div>

                        {/* 4th item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-2xl">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-8 h-8 mt-0.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ionicon"
                                        viewBox="0 0 512 512"
                                    >
                                        <title>
                                            <Balancer>Trending Up</Balancer>
                                        </title>
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="32"
                                            d="M352 144h112v112"
                                        />
                                        <path
                                            d="M48 368l121.37-121.37a32 32 0 0145.26 0l50.74 50.74a32 32 0 0045.26 0L448 160"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="32"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
                                <Balancer>
                                    Progress in Your Freelance Writing Career
                                </Balancer>
                            </h4>
                            <p className="text-gray-600 text-center">
                                <Balancer>
                                    Duelance works on a levels-based system.
                                    Submit awesome work, move up the levels, and
                                    get higher-paying work! Don't get stuck
                                    charging the same rate for years!
                                </Balancer>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesBlocks;
