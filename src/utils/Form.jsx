import sendWaitlistData from "./waitlist";
import { Button } from "@mantine/core";
import Balancer from "react-wrap-balancer";
import { useAtom } from "jotai";
import { waitlistStatusAtom, toggleAtom } from "../state";

const CTAForm = () => {
    const [waitlistStatus, setWaitlistStatus] = useAtom(waitlistStatusAtom);
    const [toggle] = useAtom(toggleAtom);
    return (
        <div className="rounded-3xl bg-scheme-darkBlue py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
            <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                    <Balancer>Get Notified When We Launch</Balancer>
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-white">
                    <Balancer>
                        Be the first one to use the platform. Just enter your
                        email below, and hit ‘Join the Waitlist’.
                    </Balancer>
                </p>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form
                    className="flex flex-col md:flex-row gap-2 items-start md:items-center justify-between"
                    onSubmit={(e) => {
                        e.preventDefault();
                        setWaitlistStatus("loading");
                        sendWaitlistData(toggle, e.target.email.value).then(
                            (response) => {
                                if (response.ok) {
                                    setWaitlistStatus("success");
                                } else {
                                    setWaitlistStatus("error");
                                    throw response;
                                }
                            }
                        );
                    }}
                >
                    <label htmlFor="email-address" className="sr-only">
                        <Balancer>Email address</Balancer>
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-scheme-darkBlue"
                        placeholder="Enter your email"
                        required
                    />
                    <Button
                        variant={
                            (waitlistStatus == "initial") |
                            (waitlistStatus == "loading")
                                ? "white"
                                : ""
                        }
                        color={waitlistStatus == "error" ? "red" : ""}
                        type="submit"
                        className={
                            (waitlistStatus == "initial") |
                            (waitlistStatus == "loading")
                                ? "text-scheme-black bg-gray-100 h-12 text-base font-medium"
                                : waitlistStatus == "error"
                                ? "bg-red-500 h-12 text-base font-medium"
                                : "h-10 text-base font-medium"
                        }
                        loading={waitlistStatus == "loading"}
                        disabled={waitlistStatus == "success"}
                    >
                        {(waitlistStatus == "initial") |
                        (waitlistStatus == "loading")
                            ? "Join the Waitlist"
                            : waitlistStatus == "success"
                            ? "Success!"
                            : "Click to retry"}
                    </Button>
                </form>
                <p className="mt-3 text-sm text-indigo-100">
                    <Balancer>
                        We care about the protection of your data. Read our{" "}
                        <a
                            href="/privacy"
                            className="font-medium text-white underline"
                        >
                            Privacy Policy.
                        </a>
                    </Balancer>
                </p>
            </div>
        </div>
    );
};

const HeroForm = () => {
    const [waitlistStatus, setWaitlistStatus] = useAtom(waitlistStatusAtom);
    const [toggle] = useAtom(toggleAtom);
    return (
        <form
            className="flex flex-col gap-2 items-center max-w-xl mx-auto mt-4"
            onSubmit={(e) => {
                e.preventDefault();
                setWaitlistStatus("loading");
                sendWaitlistData(toggle, e.target.email.value).then(
                    (response) => {
                        if (response.ok) {
                            setWaitlistStatus("success");
                        } else {
                            setWaitlistStatus("error");
                            throw response;
                        }
                    }
                );
            }}
        >
            <div className="w-full">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-scheme-darkBlue sm:text-sm"
                    placeholder="you@example.com"
                    required
                />
            </div>

            <Button
                color={waitlistStatus == "error" ? "red" : ""}
                type="submit"
                className={
                    (waitlistStatus == "initial") |
                    (waitlistStatus == "loading")
                        ? "bg-scheme-darkBlue h-10 text-base font-medium"
                        : waitlistStatus == "error"
                        ? "bg-red-500 h-10 text-base font-medium"
                        : "text-scheme-black h-10 text-base font-medium"
                }
                loading={waitlistStatus == "loading"}
                disabled={waitlistStatus == "success"}
            >
                {(waitlistStatus == "initial") | (waitlistStatus == "loading")
                    ? "Join the Waitlist"
                    : waitlistStatus == "success"
                    ? "Success!"
                    : "Click to retry"}
            </Button>
        </form>
    );
};

export { CTAForm, HeroForm };
