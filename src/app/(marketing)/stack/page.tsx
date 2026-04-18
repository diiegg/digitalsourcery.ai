import type { Metadata } from "next";
import StackContent from "./StackContent";

export const metadata: Metadata = {
  title: "Reference Stack — The Tools We Reach For | Digital Sorcery",
  description:
    "The defaults we open with, the rationale that put each item in the box, and the conditions that take it back out. Updated when we change our mind, not on a schedule.",
};

export default function StackPage() {
  return <StackContent />;
}
