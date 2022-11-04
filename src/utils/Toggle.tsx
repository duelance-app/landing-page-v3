import { useAtom } from "jotai";
import React from "react";
import { toggleAtom } from "../state";

export default function Toggle() {
    const [toggle, setToggle] = useAtom(toggleAtom);
    const toggleClass = "transform translate-x-6";

    return (
        <>
            <div
                className="md:w-14 md:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                {/* Switch */}
                <div
                    className={
                        "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform" +
                        (toggle ? null : toggleClass)
                    }
                ></div>
            </div>
        </>
    );
}
