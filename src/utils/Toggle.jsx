import { useAtom } from "jotai";
import React from "react";
import { toggleAtom, waitlistStatusAtom } from "../state";

export default function Toggle() {
    const [toggle, setToggle] = useAtom(toggleAtom);
    const [_, setWaitlistStatus] = useAtom(waitlistStatusAtom);
    const toggleClass = "transform translate-x-6";

    return (
        <div className="md:col-span-1 md:col-start-3 flex items-center justify-center text-scheme-black mb-2 md:mt-4">
            <button
                onClick={() => {
                    setToggle(true);
                    setWaitlistStatus("initial");
                }}
                className="text-2xl font-semibold"
            >
                Freelancer
            </button>
            <div className="px-2">
                <div
                    className="w-12 h-6 flex items-center rounded-full p-1 cursor-pointer text-gray-200 bg-gray-900 hover:bg-gray-800"
                    onClick={() => {
                        setToggle(!toggle);
                        setWaitlistStatus("initial");
                    }}
                >
                    {/* Switch */}
                    <div
                        className={
                            "bg-white w-4 h-4 rounded-full shadow-md transform" +
                            (toggle ? null : toggleClass)
                        }
                    ></div>
                </div>
            </div>
            <button
                onClick={() => {
                    setToggle(false);
                    setWaitlistStatus("initial");
                }}
                className="text-2xl font-semibold"
            >
                Client
            </button>
        </div>
    );
}
