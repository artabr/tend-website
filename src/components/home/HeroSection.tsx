interface HeroSectionProps {
  headline: string;
  subHeadline: string;
  callToAction: string;
  whyLink: string;
  disclaimer: string;
}

export function HeroSection({
  headline,
  subHeadline,
  callToAction,
  whyLink,
  disclaimer,
}: HeroSectionProps) {
  return (
    <section className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col gap-8 pt-24">
        <div className="flex max-w-5xl flex-col items-center gap-8 text-center">
          <h1 className="text-base-content relative z-1 text-5xl font-bold leading-[1.15] max-md:text-3xl md:text-balance">
            <span>{headline}</span>
            <svg
              width="223"
              height="12"
              viewBox="0 0 223 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-1.5 left-10 -z-1 max-md:hidden max-lg:left-4"
            >
              <path
                d="M1.30466 10.7431C39.971 5.28788 76.0949 3.02 115.082 2.30401C143.893 1.77489 175.871 0.628649 204.399 3.63102C210.113 3.92052 215.332 4.91391 221.722 6.06058"
                stroke="url(#paint0_linear_hero)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_hero"
                  x1="19.0416"
                  y1="4.03539"
                  x2="42.8362"
                  y2="66.9459"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.2" stopColor="var(--color-primary)" />
                  <stop offset="1" stopColor="var(--color-primary-content)" />
                </linearGradient>
              </defs>
            </svg>
          </h1>

          <p className="text-base-content/80 max-w-3xl text-xl">
            {subHeadline}
          </p>

          <div className="flex flex-col items-center gap-4">
            <a href="#waitlist" className="btn btn-primary btn-gradient btn-lg">
              {callToAction}
              <span className="icon-[tabler--arrow-down] size-5"></span>
            </a>
            <a
              href="#why"
              className="link link-primary link-animated text-lg font-medium"
            >
              {whyLink}
            </a>
          </div>

          <p className="text-base-content/60 mt-4 max-w-2xl text-sm">
            {disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
