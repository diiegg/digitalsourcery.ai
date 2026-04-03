import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About — Engineers, Not Consultants | Digital Sourcery",
  description:
    "Senior platform engineers who make AI work in production. Founded by infrastructure engineers who've built and scaled cloud-native systems across industries.",
};

export default function AboutPage() {
  return <AboutContent />;
}
