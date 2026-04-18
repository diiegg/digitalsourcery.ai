import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Digital Sorcery",
  description:
    "Tell us what's running, what's broken, and what you'd like changed. A senior engineer responds within one working day.",
};

export default function ContactPage() {
  return <ContactContent />;
}
