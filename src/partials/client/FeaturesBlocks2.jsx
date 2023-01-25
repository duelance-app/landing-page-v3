import React from "react";
import sendWaitlistData from "../../utils/waitlist";
import Balancer from "react-wrap-balancer";
import { toggleAtom } from "../../state";
import { useAtom } from "jotai";

function FeaturesBlocks() {
    const [toggle, setToggle] = useAtom(toggleAtom);
    return (
        <section className="relative">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-8 md:py-16">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8">
                        <h2 className="h2 mb-4 text-scheme-black">
                            <Balancer>How Duelance Works</Balancer>
                        </h2>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
                        {/* 1st item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-8 h-8 pt-0.5 pr-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ionicon"
                                        viewBox="0 0 512 512"
                                    >
                                        <title>
                                            <Balancer>Log In</Balancer>
                                        </title>
                                        <path
                                            d="M192 176v-40a40 40 0 0140-40h160a40 40 0 0140 40v240a40 40 0 01-40 40H240c-22.09 0-48-17.91-48-40v-40"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="32"
                                        />
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="32"
                                            d="M288 336l80-80-80-80M80 256h272"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                <Balancer>Sign Up</Balancer>
                            </h4>
                            <p className="text-gray-600 text-center">
                                <Balancer>
                                    Create an account and fill out your details.
                                </Balancer>
                            </p>
                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-8 h-8 pt-0.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ionicon"
                                        viewBox="0 0 512 512"
                                    >
                                        <title>
                                            <Balancer>Cloud Upload</Balancer>
                                        </title>
                                        <path
                                            d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="32"
                                        />
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="32"
                                            d="M320 255.79l-64-64-64 64M256 448.21V207.79"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                <Balancer>Post a Job</Balancer>
                            </h4>
                            <p className="text-gray-600 text-center">
                                <Balancer>
                                    Tell us exactly what you need with simple
                                    options.
                                </Balancer>
                            </p>
                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-8 h-8 pt-0.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ionicon"
                                        viewBox="0 0 512 512"
                                    >
                                        <title>Body</title>
                                        <circle
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                            strokeWidth="32"
                                            cx="256"
                                            cy="56"
                                            r="40"
                                        />
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                            strokeWidth="32"
                                            d="M199.3 295.62h0l-30.4 172.2a24 24 0 0019.5 27.8 23.76 23.76 0 0027.6-19.5l21-119.9v.2s5.2-32.5 17.5-32.5h3.1c12.5 0 17.5 32.5 17.5 32.5v-.1l21 119.9a23.92 23.92 0 1047.1-8.4l-30.4-172.2-4.9-29.7c-2.9-18.1-4.2-47.6.5-59.7 4-10.4 14.13-14.2 23.2-14.2H424a24 24 0 000-48H88a24 24 0 000 48h92.5c9.23 0 19.2 3.8 23.2 14.2 4.7 12.1 3.4 41.6.5 59.7z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                <Balancer>Sit Back & Relax</Balancer>
                            </h4>
                            <p className="text-gray-600 text-center">
                                <Balancer>
                                    You'll receive submissions or relevant
                                    profiles depending on the job.
                                </Balancer>
                            </p>
                        </div>

                        {/* 4th item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md">
                            <div className="flex items-center justify-center bg-scheme-darkBlue rounded-full w-16 h-16 p-1 -mt-1 mb-2">
                                <div className="text-white w-8 h-8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ionicon"
                                        viewBox="0 0 512 512"
                                    >
                                        <title>Card</title>
                                        <rect
                                            x="48"
                                            y="96"
                                            width="416"
                                            height="320"
                                            rx="56"
                                            ry="56"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="32"
                                        />
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinejoin="round"
                                            strokeWidth="60"
                                            d="M48 192h416M128 300h48v20h-48z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
                                <Balancer>Pay As You Want</Balancer>
                            </h4>
                            <p className="text-gray-600 text-center">
                                <Balancer>
                                    Pay using lots of payment methods once
                                    you're satisfied.
                                </Balancer>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
                    <div className="rounded-3xl bg-scheme-darkBlue py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
                        <div className="lg:w-0 lg:flex-1">
                            <h2 className="text-3xl font-bold tracking-tight text-white">
                                <Balancer>Get Notified When We Launch</Balancer>
                            </h2>
                            <p className="mt-4 max-w-3xl text-lg text-white">
                                <Balancer>
                                    Be the first one to use the platform. Just
                                    enter your email below, and hit ‘Join the
                                    Waitlist’.
                                </Balancer>
                            </p>
                        </div>
                        <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                            <form
                                className="sm:flex"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    sendWaitlistData(
                                        toggle,
                                        e.target.email.value
                                    );
                                }}
                            >
                                <label
                                    htmlFor="email-address"
                                    className="sr-only"
                                >
                                    <Balancer>Email address</Balancer>
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-scheme-darkBlue"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-100 px-5 py-3 text-base font-medium text-black hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                                >
                                    <Balancer>Join the Waitlist</Balancer>
                                </button>
                            </form>

                            <p className="mt-3 text-sm text-indigo-100">
                                <Balancer>
                                    We care about the protection of your data.
                                    Read our{" "}
                                    <a
                                        href="#"
                                        className="font-medium text-white underline"
                                    >
                                        Privacy Policy.
                                    </a>
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
