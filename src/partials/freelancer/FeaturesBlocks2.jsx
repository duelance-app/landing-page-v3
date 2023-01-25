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
                                            <Balancer>Checkmark</Balancer>
                                        </title>
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="32"
                                            d="M416 128L192 384l-96-96"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                <Balancer>Initial Vetting</Balancer>
                            </h4>
                            <p className="text-gray-600 text-center">
                                <Balancer>
                                    We'll vet you on the basis of your profile,
                                    primarily work experience.
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
                                        <title>
                                            <Balancer>Checkmark Done</Balancer>
                                        </title>
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="32"
                                            d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                <Balancer>Project-Based Vetting</Balancer>
                            </h4>
                            <p className="text-gray-600 text-center">
                                <Balancer>
                                    You'll receive a paid, real-world project to
                                    ensure you walk the talk.
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
                                        <title>Alarm</title>
                                        <path
                                            d="M416.07 272a160 160 0 10-160 160 160 160 0 00160-160zM142.12 91.21A46.67 46.67 0 00112 80l-2.79.08C83.66 81.62 64 104 64.07 131c0 13.21 4.66 19.37 10.88 27.23a4.55 4.55 0 003.24 1.77h.88a3.23 3.23 0 002.54-1.31L142.38 99a5.38 5.38 0 001.55-4 5.26 5.26 0 00-1.81-3.79zM369.88 91.21A46.67 46.67 0 01400 80l2.79.08C428.34 81.62 448 104 447.93 131c0 13.21-4.66 19.37-10.88 27.23a4.55 4.55 0 01-3.24 1.76h-.88a3.23 3.23 0 01-2.54-1.31L369.62 99a5.38 5.38 0 01-1.55-4 5.26 5.26 0 011.81-3.79z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                            strokeWidth="32"
                                        />
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="32"
                                            d="M256.07 160v112h-80M416.07 432l-40-40M96.07 432l40-40"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
                                <Balancer>Get to Work!</Balancer>
                            </h4>
                            <p className="text-gray-600 text-center">
                                <Balancer>
                                    Upon approval, you can start working and
                                    earning more!
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
                                    className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-scheme-darkBlue"
                                    placeholder="Enter your email"
                                    required
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
