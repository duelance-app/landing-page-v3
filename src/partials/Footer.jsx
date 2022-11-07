import React from "react";
import KofiButton from "kofi-button";

function Footer() {
    return (
        <footer>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Bottom area */}
                <div className="flex items-center justify-between py-4 md:py-8 border-t border-gray-200">
                    {/* Copyrights note */}
                    <div className="text-sm text-gray-600">
                        &copy; Copyright {new Date().getFullYear()} Shreyans
                        Jain & Naman Bansal.
                        <br />
                        &nbsp;&nbsp;&nbsp; All rights reserved.
                    </div>

                    <div className="pl-2.5">
                        <KofiButton
                            title="Support Us"
                            color="#1D64C2"
                            kofiID="sjain"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
