import React from "react";

import FreelancerHeader from "../partials/freelancer/Header";
import FreelancerHeroHome from "../partials/freelancer/HeroHome";
import FreelancerFeaturesHome from "../partials/freelancer/Features";
import FreelancerFeaturesBlocks from "../partials/freelancer/FeaturesBlocks";
import FreelancerFooter from "../partials/freelancer/Footer";
import ClientHeader from "../partials/client/Header";
import ClientHeroHome from "../partials/client/HeroHome";
import ClientFeaturesHome from "../partials/client/Features";
import ClientFeaturesBlocks from "../partials/client/FeaturesBlocks";
import ClientFooter from "../partials/client/Footer";
import { useAtom } from "jotai";
import { toggleAtom } from "../state";

function Home() {
    const [toggle, setToggle] = useAtom(toggleAtom);
    return (
        <>
            {toggle ? (
                <div className="flex flex-col min-h-screen overflow-hidden">
                    {/*  Site header */}
                    <FreelancerHeader />

                    {/*  Page content */}
                    <main className="flex-grow">
                        {/*  Page sections */}
                        <FreelancerHeroHome />
                        <FreelancerFeaturesHome />
                        <FreelancerFeaturesBlocks />
                    </main>

                    {/*  Site footer */}
                    <FreelancerFooter />
                </div>
            ) : (
                <div className="flex flex-col min-h-screen overflow-hidden">
                    {/*  Site header */}
                    <ClientHeader />

                    {/*  Page content */}
                    <main className="flex-grow">
                        {/*  Page sections */}
                        <ClientHeroHome />
                        <ClientFeaturesHome />
                        <ClientFeaturesBlocks />
                    </main>

                    {/*  Site footer */}
                    <ClientFooter />
                </div>
            )}
        </>
    );
}

export default Home;
