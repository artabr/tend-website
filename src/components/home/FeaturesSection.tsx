interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  calendarView: Feature;
  overviewView: Feature;
  rewardSection: {
    heading: string;
    description: string;
  };
}

export function FeaturesSection({
  calendarView,
  overviewView,
  rewardSection,
}: FeaturesSectionProps) {
  return (
    <section className="bg-base-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 className="text-base-content text-3xl font-bold sm:text-4xl lg:text-5xl">
            Track Your Progress
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card hover:border-primary border-primary/30 card-border shadow-none transition-colors duration-300">
            <div className="card-body">
              <div className="avatar avatar-placeholder mb-4">
                <div className="text-primary bg-primary/10 rounded-field size-14">
                  <span className="icon-[tabler--calendar-stats] size-8"></span>
                </div>
              </div>
              <h3 className="card-title text-xl">{calendarView.title}</h3>
              <p className="text-base-content/80 whitespace-pre-line">
                {calendarView.description}
              </p>
            </div>
          </div>

          <div className="card hover:border-success border-success/30 card-border shadow-none transition-colors duration-300">
            <div className="card-body">
              <div className="avatar avatar-placeholder mb-4">
                <div className="text-success bg-success/10 rounded-field size-14">
                  <span className="icon-[tabler--chart-bar] size-8"></span>
                </div>
              </div>
              <h3 className="card-title text-xl">{overviewView.title}</h3>
              <p className="text-base-content/80 whitespace-pre-line">
                {overviewView.description}
              </p>
            </div>
          </div>

          <div className="card hover:border-warning border-warning/30 card-border shadow-none transition-colors duration-300 sm:col-span-2 lg:col-span-1">
            <div className="card-body">
              <div className="avatar avatar-placeholder mb-4">
                <div className="text-warning bg-warning/10 rounded-field size-14">
                  <span className="icon-[tabler--trophy] size-8"></span>
                </div>
              </div>
              <h3 className="card-title text-xl">{rewardSection.heading}</h3>
              <p className="text-base-content/80 whitespace-pre-line">
                {rewardSection.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
