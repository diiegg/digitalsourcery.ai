export default function Footer() {
  return (
    <footer className="border-t border-ds-border py-10">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-ds-text-dim">
            &copy; {new Date().getFullYear()} Digital Sourcery
          </span>
          <span className="text-xs text-ds-text-dim">
            A sibling brand of BlackMagickOps
          </span>
        </div>
      </div>
    </footer>
  );
}
