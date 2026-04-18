import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Digital Sorcery",
  description:
    "Senior infrastructure engineers. Production code, not strategy decks. Knowledge transfer is the deliverable — after six months, your team owns what we built.",
};

export default function AboutPage() {
  return <AboutContent />;
}
