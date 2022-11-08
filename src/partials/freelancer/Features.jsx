import React, { useState, useRef, useEffect } from "react";
import Transition from "../../utils/Transition";

import FeaturesBg from "../../images/features-bg.png";
import FeaturesElement from "../../images/features-element.png";
import Illustration1 from "../../images/illustration_1.svg";
import Illustration2 from "../../images/illustration_2.svg";
import Illustration3 from "../../images/illustration_3.svg";
import Illustration4 from "../../images/illustration_4.svg";

function Features() {
    const [tab, setTab] = useState(1);

    const tabs = useRef(null);

    const heightFix = () => {
        if (tabs.current.children[tab]) {
            tabs.current.style.height =
                tabs.current.children[tab - 1].offsetHeight + "px";
        }
    };

    useEffect(() => {
        heightFix();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tab]);

    return (
        <section className="relative">
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div
                className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
                aria-hidden="true"
            ></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-4 md:pt-12">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8">
                        <h1 className="h2 mb-4 text-scheme-black">
                            You’ll Love Us. Here’s Why.
                        </h1>
                    </div>

                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">
                        {/* Content */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                            data-aos="fade-right"
                        >
                            {/* Tabs buttons */}
                            <div className="mb-8 md:mb-0">
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                                        tab !== 1
                                            ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                                            : "bg-gray-200 border-transparent"
                                    }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(1);
                                    }}
                                >
                                    <div>
                                        <div className="text-scheme-black font-bold leading-snug tracking-tight mb-1">
                                            Simple Subscription, No Commission
                                        </div>
                                        <div className="text-gray-600">
                                            Our platform doesn’t charge
                                            commissions, so that you get to take
                                            more home. Pay a fixed monthly price
                                            and work on as many projects as you
                                            want to! It’s 5-10x cheaper!
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-scheme-darkBlue rounded-full shadow flex-shrink-0 ml-3">
                                        <div className="text-white m-1 w-4 h-4 fill-current">
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
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                                        tab !== 2
                                            ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                                            : "bg-gray-200 border-transparent"
                                    }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(2);
                                    }}
                                >
                                    <div>
                                        <div className="text-scheme-black font-bold leading-snug tracking-tight mb-1">
                                            Get Work, Don't Search For It
                                        </div>
                                        <div className="text-gray-600">
                                            Our platform intelligently matches
                                            and shows your projects that suit
                                            your skill level and expertise. Just
                                            click one button to accept or reject
                                            a job. Jobs come to you, you don’t
                                            look for them :)
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-scheme-darkBlue rounded-full shadow flex-shrink-0 ml-3">
                                        <div className="text-white m-1 w-4 h-4 fill-current">
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
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                                        tab !== 3
                                            ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                                            : "bg-gray-200 border-transparent"
                                    }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(3);
                                    }}
                                >
                                    <div>
                                        <div className="text-scheme-black font-bold leading-snug tracking-tight mb-1">
                                            Get Paid, No Matter What
                                        </div>
                                        <div className="text-gray-600">
                                            Never ever get scammed again. We
                                            ensure that you get paid on
                                            submitting satisfactory work, no
                                            matter what. We will pay you if the
                                            client doesn’t.
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-scheme-darkBlue rounded-full shadow flex-shrink-0 ml-3">
                                        <div className="text-white m-1 w-4 h-4 fill-current">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="ionicon"
                                                viewBox="0 0 512 512"
                                            >
                                                <title>Cash</title>
                                                <path d="M448 400H64a16 16 0 010-32h384a16 16 0 010 32zM416 448H96a16 16 0 010-32h320a16 16 0 010 32zM32 272H16v48a32 32 0 0032 32h48v-16a64.07 64.07 0 00-64-64z" />
                                                <path d="M480 240h16v-64h-16a96.11 96.11 0 01-96-96V64H128v16a96.11 96.11 0 01-96 96H16v64h16a96.11 96.11 0 0196 96v16h256v-16a96.11 96.11 0 0196-96zm-224 64a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                                                <circle
                                                    cx="256"
                                                    cy="208"
                                                    r="64"
                                                />
                                                <path d="M416 336v16h48a32 32 0 0032-32v-48h-16a64.07 64.07 0 00-64 64zM480 144h16V96a32 32 0 00-32-32h-48v16a64.07 64.07 0 0064 64zM96 80V64H48a32 32 0 00-32 32v48h16a64.07 64.07 0 0064-64z" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                                        tab !== 4
                                            ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                                            : "bg-gray-200 border-transparent"
                                    }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(4);
                                    }}
                                >
                                    <div>
                                        <div className="text-scheme-black font-bold leading-snug tracking-tight mb-1">
                                            Just Move Up, No Race To The Bottom
                                        </div>
                                        <div className="text-gray-600">
                                            Stop building websites for $5. Work
                                            on projects that value your
                                            contribution and don’t lowball you.
                                            We hate to see freelancers
                                            undervaluing themselves and working
                                            for pennies.
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-scheme-darkBlue rounded-full shadow flex-shrink-0 ml-3">
                                        <div className="text-white m-1 w-4 h-4 fill-current">
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
                                </a>
                            </div>
                        </div>

                        {/* Tabs items */}
                        <div
                            className="flex items-center justify-center max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                            data-aos="zoom-y-out"
                            ref={tabs}
                        >
                            <div className="relative flex flex-col text-center lg:text-right">
                                {/* Item 1 */}
                                <Transition
                                    show={tab === 1}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <img
                                            className="md:max-w-none mx-auto rounded"
                                            src={Illustration1}
                                            width="500"
                                            height="462"
                                            alt="Features bg"
                                        />
                                    </div>
                                </Transition>
                                {/* Item 2 */}
                                <Transition
                                    show={tab === 2}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <img
                                            className="md:max-w-none mx-auto rounded"
                                            src={Illustration2}
                                            width="500"
                                            height="462"
                                            alt="Features bg"
                                        />
                                    </div>
                                </Transition>
                                {/* Item 3 */}
                                <Transition
                                    show={tab === 3}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <img
                                            className="md:max-w-none mx-auto rounded"
                                            src={Illustration3}
                                            width="500"
                                            height="462"
                                            alt="Features bg"
                                        />
                                    </div>
                                </Transition>
                                {/* Item 4 */}
                                <Transition
                                    show={tab === 4}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <img
                                            className="md:max-w-none mx-auto rounded"
                                            src={Illustration4}
                                            width="500"
                                            height="462"
                                            alt="Features bg"
                                        />
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
