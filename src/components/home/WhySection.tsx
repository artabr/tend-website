interface WhyBlock {
  title: string;
  description: string;
}

interface WhySectionProps {
  title: string;
  disclaimer: string;
  blocks: WhyBlock[];
}

export function WhySection({ title, disclaimer, blocks }: WhySectionProps) {
  return (
    <section id="why" className="bg-base-200 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-6 text-center sm:mb-16 lg:mb-20">
          <h2 className="text-base-content text-3xl font-bold sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-base-content/70 mx-auto max-w-3xl whitespace-pre-line text-lg">
            {disclaimer}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="card hover:border-info border-info/30 card-border shadow-none transition-colors duration-300"
            >
              <div className="card-body">
                <div className="avatar avatar-placeholder mb-4">
                  <div className="text-info bg-info/10 rounded-field size-14">
                    <span className="icon-[tabler--rocket] size-8"></span>
                  </div>
                </div>
                <h3 className="card-title text-xl">{block.title}</h3>
                <p className="text-base-content/80 whitespace-pre-line">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
