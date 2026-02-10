interface FooterProps {
  copyright: string;
  privacyPolicy: string;
}

export function Footer({ copyright, privacyPolicy }: FooterProps) {
  return (
    <footer className="footer footer-center bg-base-200 p-10">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-base-content flex items-center gap-3 text-xl font-bold">
          <span>Tend</span>
        </div>

        <nav className="flex items-center gap-6">
          <a
            href="/privacy"
            className="link link-animated text-base-content/80 font-medium"
          >
            {privacyPolicy}
          </a>
        </nav>
      </div>

      <div className="divider"></div>

      <aside className="text-base-content text-base">{copyright}</aside>
    </footer>
  );
}
