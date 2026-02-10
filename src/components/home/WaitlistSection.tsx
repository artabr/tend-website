'use client';

interface WaitlistSectionProps {
  title: string;
  description: string;
  disclaimer: string;
  actionButton: string;
}

export function WaitlistSection({
  title,
  description,
  disclaimer,
  actionButton,
}: WaitlistSectionProps) {
  return (
    <section id="waitlist" className="bg-base-200 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body mx-auto max-w-2xl text-center">
            <h2 className="text-base-content mb-6 text-3xl font-bold sm:text-4xl">
              {title}
            </h2>
            <p className="text-base-content/80 mb-8 whitespace-pre-line text-lg">
              {description}
            </p>

            <div className="mb-6">
              <div id="brevo-form-container" className="brevo-form" />
            </div>

            <p className="text-base-content/60 text-sm">{disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
