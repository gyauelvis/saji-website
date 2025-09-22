import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-unbounded text-primary dark:text-background-light text-left mb-4 tracking-tighter">
                        Projects using Saji
                    </h1>
                    <p className="text-lg font-sans text-primary/60 dark:text-background-light/60 text-left">
                        Explore projects built using Saji, showcasing its versatility and impact in geospatial applications.
                    </p>
                </div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <div key={project.id}>
                            <div className="group flex flex-col md:flex-row items-center gap-8 border border-primary/10 dark:border-background-light/10 p-6 rounded-xl transition-all duration-300 hover:border-primary/20 dark:hover:border-background-light/20 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-background-light/5">
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold font-unbounded text-primary dark:text-background-light text-left mb-2">
                                        {project.title}
                                    </h2>
                                    <p className="text-primary/70 dark:text-background-light/70 font-sans text-left mb-4">
                                        {project.description}
                                    </p>
                                    <Link
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-sm font-medium font-sans text-primary dark:text-background-light group-hover:underline"
                                    >
                                        View Project
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                                <div className="w-full md:w-64 h-48 rounded-lg relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            {index !== projects.length - 1 && (
                                <div className="my-12 border-t border-primary/20 dark:border-background-light/20"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}