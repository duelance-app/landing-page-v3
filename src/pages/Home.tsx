import React from "react";

import Header from "../partials/Header";
import Footer from "../partials/Footer";
import FreelancerHeroHome from "../partials/freelancer/HeroHome";
import FreelancerFeaturesHome from "../partials/freelancer/Features";
import FreelancerFeaturesBlocks from "../partials/freelancer/FeaturesBlocks";
import ClientHeroHome from "../partials/client/HeroHome";
import ClientFeaturesHome from "../partials/client/Features";
import ClientFeaturesBlocks from "../partials/client/FeaturesBlocks";
import { useAtom } from "jotai";
import { toggleAtom } from "../state";

function Home() {
    const [toggle, setToggle] = useAtom(toggleAtom);
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header />

            {toggle ? (
                <>
                    {/*  Page content */}
                    <main className="flex-grow">
                        {/*  Page sections */}
                        <FreelancerHeroHome />
                        <FreelancerFeaturesHome />
                        <FreelancerFeaturesBlocks />
                    </main>
                </>
            ) : (
                <>
                    {/*  Page content */}
                    <main className="flex-grow">
                        {/*  Page sections */}
                        <ClientHeroHome />
                        <ClientFeaturesHome />
                        <ClientFeaturesBlocks />
                    </main>
                </>
            )}
            {/*  Site footer */}
            <Footer />
        </div>
    );
}

export default Home;
