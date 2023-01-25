import { useAtom } from "jotai";
import React from "react";
import { toggleAtom } from "../state";

export default function Toggle() {
    const [toggle, setToggle] = useAtom(toggleAtom);
    const toggleClass = "transform translate-x-6";

    return (
        <>
            <div
                className="w-12 h-6 flex items-center rounded-full p-1 cursor-pointer text-gray-200 bg-gray-900 hover:bg-gray-800"
                onClick={() => {
                    setToggle(!toggle);
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
        </>
    );
}
