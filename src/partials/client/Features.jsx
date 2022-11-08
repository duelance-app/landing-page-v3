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
                            What we can do for you
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
                                            Simple Subscription, No Commissions
                                        </div>
                                        <div className="text-gray-600">
                                            It doesn’t matter if it’s a $20 job
                                            or a $200K one. Pay a fixed monthly
                                            price and hire as many freelancers
                                            as you want to. It’s 5-10x cheaper
                                            for you.
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
                                            Hire Within Hours, Not Days
                                        </div>
                                        <div className="text-gray-600">
                                            Stop spending days gathering
                                            resumes, scanning through them,
                                            setting up interviews, and finally
                                            starting work. Our platform does all
                                            the heavy lifting, enabling you to
                                            start with a suitable person within
                                            hours.
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-scheme-darkBlue rounded-full shadow flex-shrink-0 ml-3">
                                        <div className="text-white m-1 w-4 h-4 fill-current">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="ionicon"
                                                viewBox="0 0 512 512"
                                            >
                                                <title>Hourglass</title>
                                                <path
                                                    d="M145.61 464h220.78c19.8 0 35.55-16.29 33.42-35.06C386.06 308 304 310 304 256s83.11-51 95.8-172.94c2-18.78-13.61-35.06-33.41-35.06H145.61c-19.8 0-35.37 16.28-33.41 35.06C124.89 205 208 201 208 256s-82.06 52-95.8 172.94c-2.14 18.77 13.61 35.06 33.41 35.06z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="32"
                                                />
                                                <path d="M343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.23 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87 9.95 12.04 6.47 29.13-9.1 29.13z" />
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
                                            Amazing Work, No Matter What
                                        </div>
                                        <div className="text-gray-600">
                                            For one off projects (development,
                                            writing & editing, graphic design),
                                            we show you submissions from a few
                                            curated freelancers to help you
                                            compare and choose the best one.
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-scheme-darkBlue rounded-full shadow flex-shrink-0 ml-3">
                                        <div className="text-white m-1 w-4 h-4 fill-current">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="ionicon"
                                                viewBox="0 0 512 512"
                                            >
                                                <title>Thumbs Up</title>
                                                <path d="M472.06 334l-144.16-6.13c-4.61-.36-23.9-1.21-23.9-25.87 0-23.81 19.16-25.33 24.14-25.88L472.06 270c12.67.13 23.94 14.43 23.94 32s-11.27 31.87-23.94 32zM330.61 202.33L437.35 194C450 194 464 210.68 464 227.88v.33c0 16.32-11.14 29.62-24.88 29.79l-108.45-1.73C304 253 304 236.83 304 229.88c0-22.88 21.8-27.15 26.61-27.55zM421.85 480l-89.37-8.93C308 470.14 304 453.82 304 443.59c0-18.38 13.41-24.6 26.67-24.6l91-3c14.54.23 26.32 14.5 26.32 32s-11.67 31.67-26.14 32.01zm34.36-71.5l-126.4-6.21c-9.39-.63-25.81-3-25.81-26.37 0-12 4.35-25.61 25-27.53l127.19-3.88c13.16.14 23.81 13.49 23.81 31.4s-10.65 32.43-23.79 32.58z" />
                                                <path
                                                    d="M133.55 238.06A15.85 15.85 0 01126 240a15.82 15.82 0 007.51-1.92zM174.14 168.78l.13-.23-.13.23c-20.5 35.51-30.36 54.95-33.82 62 3.47-7.07 13.34-26.51 33.82-62z"
                                                    fill="none"
                                                />
                                                <path d="M139.34 232.84l1-2a16.27 16.27 0 01-6.77 7.25 16.35 16.35 0 005.77-5.25z" />
                                                <path d="M316.06 52.62C306.63 39.32 291 32 272 32a16 16 0 00-14.31 8.84c-3 6.07-15.25 24-28.19 42.91-18 26.33-40.35 59.07-55.23 84.8l-.13.23c-20.48 35.49-30.35 54.93-33.82 62l-1 2a16.35 16.35 0 01-5.79 5.22 15.82 15.82 0 01-7.53 2h-25.31A84.69 84.69 0 0016 324.69v38.61a84.69 84.69 0 0084.69 84.7h48.79a17.55 17.55 0 019.58 2.89C182 465.87 225.34 480 272 480c7.45 0 14.19-.14 20.27-.38a8 8 0 006.2-12.68l-.1-.14C289.8 454.41 288 441 288 432a61.2 61.2 0 015.19-24.77 17.36 17.36 0 000-14.05 63.81 63.81 0 010-50.39 17.32 17.32 0 000-14 62.15 62.15 0 010-49.59 18.13 18.13 0 000-14.68A60.33 60.33 0 01288 239c0-8.2 2-21.3 8-31.19a15.63 15.63 0 001.14-13.64c-.38-1-.76-2.07-1.13-3.17a24.84 24.84 0 01-.86-11.58c3-19.34 9.67-36.29 16.74-54.16 3.08-7.78 6.27-15.82 9.22-24.26 6.14-17.57 4.3-35.2-5.05-48.38z" />
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
                                            Everything Handled, By Us
                                        </div>
                                        <div className="text-gray-600">
                                            Duelance handles everything for you.
                                            Everything from finding candidates
                                            to paying them. All you need to do
                                            is give us what you need done.
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-scheme-darkBlue rounded-full shadow flex-shrink-0 ml-3">
                                        <div className="text-white m-1 w-4 h-4 fill-current">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="ionicon"
                                                viewBox="0 0 512 512"
                                            >
                                                <title>Triangle</title>
                                                <path d="M464 464H48a16 16 0 01-14.07-23.62l208-384a16 16 0 0128.14 0l208 384A16 16 0 01464 464z" />
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
