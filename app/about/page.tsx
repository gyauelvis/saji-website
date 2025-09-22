import { Github, FileText, Users } from 'lucide-react'
import Link from 'next/link'
import { Layers3 } from 'lucide-react'

export default function AboutPage() {
    const contributionWays = [
        {
            icon: Github,
            title: "GitHub Repository",
            description: "Explore code, documentation, and contribution guidelines.",
            link: "#"
        },
        {
            icon: FileText,
            title: "Contribution Forms",
            description: "Submit data, report issues, or suggest improvements.",
            link: "#"
        },
        {
            icon: Users,
            title: "Community",
            description: "Join discussions to share ideas and collaborate.",
            link: "#"
        }
    ]

    return (
        <div className="container mx-auto max-w-4xl px-4 py-16">
            <section>
                <h1 className="text-4xl md:text-5xl font-bold font-unbounded tracking-tighter text-primary dark:text-background-light text-left mb-4">
                    About Saji
                </h1>
                <p className="text-lg leading-8 font-sans text-primary/80 dark:text-background-light/80 text-left">
                    Saji is an open-source geospatial dataset project focused on Ghana. Our vision is to create a comprehensive, accurate, and accessible geospatial resource for researchers, developers, and policymakers. We aim to empower data-driven decision-making and innovation across various sectors, including urban planning, environmental management, and disaster response.
                </p>
            </section>

            <div className="my-16 border-t border-primary/20 dark:border-background-light/20"></div>

            <section>
                <h2 className="text-3xl font-bold font-unbounded text-primary dark:text-background-light text-left mb-4">
                    Our Purpose
                </h2>
                <p className="text-base leading-7 font-sans text-primary/80 dark:text-background-light/80 text-left">
                    Saji's primary purpose is to aggregate and curate diverse geospatial data sources for Ghana, ensuring data quality and consistency. We provide tools and documentation to facilitate data access, integration, and analysis. By fostering collaboration within the open-source community, we strive to continuously improve and expand the dataset's coverage and utility.
                </p>
            </section>

            <div className="my-16 border-t border-primary/20 dark:border-background-light/20"></div>

            <section>
                <h2 className="text-3xl font-bold font-unbounded text-primary dark:text-background-light text-left mb-4">
                    Contributing to Saji
                </h2>
                <p className="text-base leading-7 font-sans text-primary/80 dark:text-background-light/80 text-left mb-10">
                    We welcome contributions from the community! Whether you're a data scientist, developer, or domain expert, your expertise can help enhance Saji. Here's how you can get involved:
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {contributionWays.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <Link
                                key={index}
                                href={item.link}
                                className="group block rounded-lg border border-primary/20 dark:border-background-light/20 p-6 transition-all duration-300 hover:bg-primary/5 dark:hover:bg-primary/20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/30 group-hover:bg-primary/20 dark:group-hover:bg-primary/40 transition-colors">
                                        <Icon className="w-6 h-6 text-primary dark:text-background-light" />
                                    </div>
                                    <h3 className="text-base font-bold font-sans text-primary dark:text-background-light">{item.title}</h3>
                                </div>
                                <p className="mt-4 text-sm font-sans text-primary/80 dark:text-background-light/80 text-left">
                                    {item.description}
                                </p>
                            </Link>
                        )
                    })}
                </div>

                <p className="mt-10 text-base leading-7 font-sans text-primary/80 dark:text-background-light/80 text-left">
                    For more detailed information, please refer to our contribution guidelines on GitHub. We appreciate your support in making Saji a valuable resource for Ghana's geospatial community.
                </p>
            </section>
        </div>
    )
}