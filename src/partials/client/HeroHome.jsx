import React from "react";
import sendWaitlistData from "../../utils/waitlist";
import Balancer from "react-wrap-balancer";
import { toggleAtom } from "../../state";
import { useAtom } from "jotai";

import HeroImage from "../../images/hero-image.svg";

function HeroHome() {
    const [toggle, setToggle] = useAtom(toggleAtom);
    return (
        <section className="relative">
            {/* Illustration behind hero content */}
            <div
                className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
                aria-hidden="true"
            >
                <svg
                    width="1360"
                    height="578"
                    viewBox="0 0 1360 578"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            x1="50%"
                            y1="0%"
                            x2="50%"
                            y2="100%"
                            id="illustration-01"
                        >
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div>

            <div className="max-w-7xl mt-28 mx-auto px-4 sm:px-6 md:mt-0">
                {/* Hero content */}
                <div className="pt-20 md:pt-28">
                    {/* Section header */}
                    <div className="text-center">
                        <h1
                            className="text-5xl md:text-[4.75rem] text-scheme-black font-extrabold leading-tighter tracking-tighter mb-4"
                            data-aos="zoom-y-out"
                        >
                            <Balancer>
                                Hire Skilled Freelance Writers {""}{" "}
                            </Balancer>

                            <div className="bg-clip-text text-transparent bg-gradient-to-r from-scheme-darkBlue to-scheme-lightBlue">
                                <Balancer>
                                    <span>Without Wasting Time on</span>
                                </Balancer>
                                <Balancer>
                                    <span>200+ Bad Applications</span>
                                </Balancer>
                            </div>
                        </h1>
                        <div className="max-w-3xl mx-auto">
                            <p
                                className="text-xl lg:text-2xl text-gray-600"
                                data-aos="zoom-y-out"
                                data-aos-delay="150"
                            >
                                <Balancer>
                                    Duelance helps you hire vetted, trusted, and
                                    skilled writers without wasting time on
                                    obvious no-goes. Work with trustworthy and
                                    communicative experts who’ll take your
                                    business to the next level!
                                </Balancer>
                            </p>
                            <div
                                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                                data-aos="zoom-y-out"
                                data-aos-delay="300"
                            ></div>
                        </div>
                    </div>

                    <form
                        className="max-w-xl mx-auto mt-4 flex-col flex"
                        onSubmit={(e) => {
                            e.preventDefault();
                            sendWaitlistData(toggle, e.target.email.value);
                        }}
                    >
                        <div className="mt-1">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-scheme-darkBlue sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mx-auto inline-flex justify-center items-center rounded border border-transparent bg-scheme-darkBlue px-5 py-2 my-4 text-base font-medium text-white shadow-sm hover:bg-transparent focus:outline hover:text-black focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full md:w-1/3"
                        >
                            <Balancer>Join the Waitlist</Balancer>
                        </button>
                    </form>

                    {/* Hero image */}
                    <div>
                        <div
                            className="relative flex justify-center"
                            data-aos="zoom-y-out"
                            data-aos-delay="450"
                        >
                            <div className="flex flex-col justify-center">
                                <img
                                    className="mx-auto"
                                    src={HeroImage}
                                    width="750"
                                    height="500"
                                    alt="Hero"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroHome;
