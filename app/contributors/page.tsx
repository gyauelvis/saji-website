import Image from 'next/image'
import { topContributors, allContributors } from '@/data/contributors'

export default function ContributorsPage() {
    const remainingContributors = allContributors.slice(3)

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl font-unbounded md:text-5xl font-bold text-primary dark:text-background-light tracking-tighter text-left mb-4">
                        Contributors
                    </h1>
                    <p className="text-lg font-sans text-primary/60 dark:text-background-light/60 text-left">
                        Saji is built by a passionate community of developers. Here are our heroes.
                    </p>
                </div>

                <section className="mb-16">
                    <h2 className="text-3xl font-unbounded font-bold text-primary dark:text-background-light text-left mb-8 tracking-tight">
                        Top Contributors
                    </h2>
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-8">
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
                </section>

                <div className="my-16 border-t border-primary/20 dark:border-background-light/20"></div>

                <section>
                    <h2 className="text-3xl font-bold font-unbounded text-primary dark:text-background-light text-left mb-8 tracking-tight">
                        All Contributors
                    </h2>
                    <div className="overflow-x-auto bg-background-light dark:bg-background-dark border border-primary/10 dark:border-background-light/10 rounded-lg">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs uppercase bg-primary/5 dark:bg-background-light/5">
                                <tr>
                                    <th scope="col" className="px-6 py-3 font-bold font-sans text-primary dark:text-background-light">Rank</th>
                                    <th scope="col" className="px-6 py-3 font-bold font-sans text-primary dark:text-background-light">Contributor</th>
                                    <th scope="col" className="px-6 py-3 font-bold font-sans text-primary dark:text-background-light text-right">Contributions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {remainingContributors.map((contributor, index) => (
                                    <tr
                                        key={contributor.id}
                                        className={`hover:bg-primary/5 dark:hover:bg-background-light/5 transition-colors ${index !== remainingContributors.length - 1
                                            ? 'border-b border-primary/10 dark:border-background-light/10'
                                            : ''
                                            }`}
                                    >
                                        <td className="px-6 py-4 font-medium font-unbounded text-primary/60 dark:text-background-light/60">
                                            {contributor.rank}
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium font-sans text-primary dark:text-background-light whitespace-nowrap">
                                            {contributor.name}
                                        </th>
                                        <td className="px-6 py-4 text-right font-unbounded text-primary/60 dark:text-background-light/60">
                                            {contributor.contributions}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}