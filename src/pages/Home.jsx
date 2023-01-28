import React from "react";
import CookieConsent, {
    Cookies,
    getCookieConsentValue,
} from "react-cookie-consent";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import FreelancerHeroHome from "../partials/freelancer/HeroHome";
import FreelancerFeaturesBlocks from "../partials/freelancer/FeaturesBlocks";
import FreelancerFeaturesBlocks2 from "../partials/freelancer/FeaturesBlocks2";
import ClientHeroHome from "../partials/client/HeroHome";
import ClientFeaturesBlocks from "../partials/client/FeaturesBlocks";
import ClientFeaturesBlocks2 from "../partials/client/FeaturesBlocks2";
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
                        <FreelancerFeaturesBlocks />
                        <FreelancerFeaturesBlocks2 />
                        <CookieConsent
                            style={{ backgroundColor: "rgb(29, 100, 194)" }}
                            contentStyle={{ fontSize: "20px" }}
                            buttonStyle={{
                                backgroundColor: "white",
                                boxShadow: "5px 1px 1px black ",
                            }}
                        >
                            This site uses cookies. By using this site you agree
                            to their usage.
                        </CookieConsent>
                    </main>
                </>
            ) : (
                <>
                    {/*  Page content */}
                    <main className="flex-grow">
                        {/*  Page sections */}
                        <ClientHeroHome />
                        <ClientFeaturesBlocks />
                        <ClientFeaturesBlocks2 />
                        <CookieConsent
                            style={{ backgroundColor: "rgb(29, 100, 194)" }}
                            contentStyle={{ fontSize: "20px" }}
                            buttonStyle={{
                                backgroundColor: "white",
                                boxShadow: "5px 1px 1px black ",
                            }}
                        >
                            This site uses cookies. By using this site you agree
                            to their usage.
                        </CookieConsent>
                    </main>
                </>
            )}
            {/*  Site footer */}
            <Footer />
        </div>
    );
}

export default Home;
