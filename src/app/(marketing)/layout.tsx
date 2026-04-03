import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollSpark from "@/components/ScrollSpark";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollSpark />
      <Header />
      {children}
      <Footer />
    </>
  );
}
