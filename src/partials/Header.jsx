import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Toggle from "../utils/Toggle";

function Header() {
    const [top, setTop] = useState(true);

    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [top]);

    return (
        <header
            className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
                !top && "bg-white backdrop-blur-sm shadow-lg"
            }`}
        >
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex flex-col items-center justify-between mb-4 md:h-20 md:flex-row md:mb-0">
                    {/* Site branding */}
                    <div className="">
                        {/* Logo */}
                        <Link to="/" className="block" aria-label="Duelance">
                            <svg
                                version="1.0"
                                className="w-20 h-20"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 625.000000 626.000000"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <g
                                    transform="translate(0.000000,626.000000) scale(0.100000,-0.100000)"
                                    fill="#000000"
                                    stroke="none"
                                >
                                    <path
                                        d="M3123 4869 c-45 -13 -100 -71 -112 -116 -15 -53 -14 -1114 0 -1167
21 -78 115 -137 192 -121 49 10 102 49 120 88 15 31 17 96 17 617 0 521 -2
586 -17 617 -30 65 -126 104 -200 82z"
                                    />
                                    <path
                                        d="M2655 4311 c-48 -22 -79 -54 -100 -103 -13 -33 -15 -165 -15 -1111
l0 -1074 23 -44 c13 -24 43 -57 66 -74 42 -29 46 -30 182 -33 l139 -4 0 131
c0 72 1 134 3 138 1 4 -15 11 -36 15 -57 12 -96 35 -117 71 -19 31 -20 56 -20
870 0 692 2 843 14 871 17 42 66 77 116 83 l40 6 0 132 0 132 -82 6 c-129 10
-170 8 -213 -12z"
                                    />
                                    <path
                                        d="M3390 4161 l0 -140 67 -32 c121 -58 196 -157 240 -319 16 -58 18
-116 18 -565 0 -447 -2 -508 -18 -577 -37 -158 -115 -263 -239 -321 l-68 -32
0 -143 0 -143 38 7 c146 27 285 99 378 195 97 102 147 207 186 389 18 85 21
143 25 533 7 601 -8 738 -104 936 -78 164 -220 277 -413 330 -119 33 -110 43
-110 -118z"
                                    />
                                    <path
                                        d="M3105 2716 c-41 -18 -82 -68 -94 -114 -14 -50 -14 -1105 0 -1155 13
-49 61 -103 106 -118 46 -15 118 -6 152 18 14 11 36 35 49 53 l22 33 0 592 0
592 -22 33 c-13 18 -35 42 -50 53 -34 26 -121 33 -163 13z"
                                    />
                                </g>
                            </svg>
                        </Link>
                    </div>

                    <div className="flex items-center justify-center text-gray-900 mb-2">
                        <span className="text-2xl font-semibold">Freelancer</span>
                        <div className="px-2">
                            <Toggle />
                        </div>
                        <span className="text-2xl font-semibold">Client</span>
                    </div>

                    {/* Site navigation */}

                    <div>
                        <button className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800">
                            <span>Join the waitlist</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
