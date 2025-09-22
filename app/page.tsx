import Image from 'next/image'
import { topContributors } from '@/data/contributors'

export default function HomePage() {


  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
      <div className="mx-auto">
        <h1 className="text-4xl text-left font-unbounded md:text-7xl font-bold tracking-tighter text-primary dark:text-background-light mb-4 animate-fade-in-down">
          An open-source dataset of Ghana's places and landmarks, built by the <span className="italic bg-gradient-to-b from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">Ghanaians</span>.
        </h1>
        <p className="mt-6 text-lg max-w-4xl text-left font-sans text-primary/80 dark:text-background-light/80 animate-fade-in-up">
          Saji is a community-driven initiative to create a comprehensive and freely accessible dataset of geographical information for Ghana. Our goal is to empower developers, researchers, and enthusiasts with accurate and up-to-date data on places, landmarks, and geographical features across the country.
        </p>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl text-left font-unbounded font-bold text-primary dark:text-background-light mb-10">Top Contributors</h2>
        <div className="max-w-xl bg-background-light dark:bg-background-dark rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {topContributors.map((contributor, index) => (
              <div
                key={contributor.id}
                className="relative flex flex-col items-start group transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative">
                  <Image
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/10 dark:border-background-light/10 group-hover:border-primary/20 dark:group-hover:border-background-light/20 transition-colors"
                    width={128}
                    height={128}
                  />
                  <div className="absolute -top-2 -right-2 bg-primary text-background-light rounded-full w-8 h-8 flex items-center justify-center font-bold font-unbounded text-lg">
                    {contributor.rank}
                  </div>
                </div>
                <div className="mt-4 text-left">
                  <p className="text-lg font-bold font-sans text-primary dark:text-background-light">
                    {contributor.name}
                  </p>
                  <p className="text-sm font-unbounded text-primary/60 dark:text-background-light/60">
                    {contributor.contributions.toLocaleString()} contributions
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}