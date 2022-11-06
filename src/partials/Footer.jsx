import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Bottom area */}
                <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
                    {/* Social links */}
                    <div className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                        <a
                            href="https://www.linkedin.com/company/duelance"
                            className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                            aria-label="Linkedin"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="ionicon w-8 h-8 fill-current"
                                viewBox="0 0 512 512"
                            >
                                <title>Logo Linkedin</title>
                                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                            </svg>
                        </a>
                    </div>

                    {/* Copyrights note */}
                    <div className="text-sm text-gray-600 mr-4">
                        &copy; Copyright Shreyans Jain & Naman Bansal. All
                        rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
