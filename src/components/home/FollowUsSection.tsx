interface Button {
  label: string;
  url: string;
}

interface FollowUsSectionProps {
  title: string;
  description: string;
  buttons: Button[];
}

export function FollowUsSection({
  title,
  description,
  buttons,
}: FollowUsSectionProps) {
  return (
    <section className="bg-base-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="card-body mx-auto max-w-3xl text-center">
            <h2 className="text-base-content mb-6 text-3xl font-bold sm:text-4xl">
              {title}
            </h2>
            <p className="text-base-content/80 mb-8 text-lg">{description}</p>

            <div className="flex flex-wrap justify-center gap-4">
              {buttons.map((button) => (
                <a
                  key={button.label}
                  href={button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  {button.label === 'Twitter' && (
                    <span className="icon-[tabler--brand-x] size-5"></span>
                  )}
                  {button.label === 'Telegram' && (
                    <span className="icon-[tabler--brand-telegram] size-5"></span>
                  )}
                  {button.label === 'Bluesky' && (
                    <span className="icon-[tabler--brand-bluesky] size-5"></span>
                  )}
                  {button.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
