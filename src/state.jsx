import { atom } from "jotai";

export const toggleAtom = atom(true);
export const waitlistAtom = atom(false);
export const waitlistStatusAtom = atom("initial");
