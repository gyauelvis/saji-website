import Link from 'next/link'
import { Calendar, CalendarCheck, ArrowRight, ExternalLink, Users, Mic } from 'lucide-react'
import { upcomingEvents, pastEvents } from '@/data/event'
import Image from 'next/image'

export default function EventsPage() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
            <div className="mb-16 text-left">
                <h1 className="text-4xl font-unbounded font-bold tracking-tighter text-primary dark:text-background-light sm:text-5xl">
                    Community Events
                </h1>
                <p className="mt-4 max-w-2xl text-base text-primary/60 dark:text-background-light/60">
                    Every year we organize events like Code & Contribute during
                    Hacktoberfest to bring people together, learn about open source,
                    and make contributions to Saji.
                </p>
            </div>

            <div className="space-y-12">
                {/* Upcoming Events */}
                <div>
                    <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary dark:text-background-light">
                        Upcoming
                    </h2>
                    {upcomingEvents.length > 0 ? (
                        <div className="space-y-6">
                            {upcomingEvents.map((event, index) => (
                                <div key={event.id} className="relative flex items-start gap-6">
                                    {index < upcomingEvents.length - 1 && (
                                        <div className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-primary/10 dark:bg-background-light/10"></div>
                                    )}
                                    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-background-light dark:bg-background-dark border-2 border-primary/20 dark:border-background-light/20">
                                        <Calendar className="w-5 h-5 text-primary dark:text-background-light" />
                                    </div>
                                    <div className="flex-grow rounded-lg border border-primary/10 dark:border-background-light/10 p-6 bg-background-light dark:bg-background-dark/50">
                                        <h3 className="font-bold text-primary dark:text-background-light">
                                            {event.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-primary/60 dark:text-background-light/60">
                                            {event.date} • {event.location}
                                        </p>
                                        {event.description && (
                                            <p className="mt-2 text-sm text-primary/80 dark:text-background-light/80">
                                                {event.description}
                                            </p>
                                        )}
                                        {event.registrationLink && (
                                            <Link
                                                href={event.registrationLink}
                                                className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-background-light transition-opacity hover:opacity-80"
                                            >
                                                <span>Register Now</span>
                                                <ArrowRight className="ml-1.5 w-4 h-4" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <Calendar className="w-12 h-12 text-primary/30 dark:text-background-light/30 mx-auto mb-4" />
                            <p className="text-primary/60 dark:text-background-light/60">
                                No upcoming events scheduled. Check back soon!
                            </p>
                        </div>
                    )}
                </div>

                {/* Past Events */}

                <div>
                    <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary dark:text-background-light">
                        Past Events
                    </h2>
                    <div className="space-y-12">
                        {pastEvents.map((event, index) => (
                            <div key={event.id} className="relative">
                                {/* Timeline line */}
                                {index < pastEvents.length - 1 && (
                                    <div className="absolute left-5 top-12 -ml-px h-full w-0.5 bg-primary/10 dark:bg-background-light/10"></div>
                                )}

                                <div className="flex items-start gap-6">
                                    {/* Timeline dot */}
                                    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary/10 dark:border-background-light/10 bg-background-light dark:bg-background-dark">
                                        <CalendarCheck className="w-5 h-5 text-primary/50 dark:text-background-light/50" />
                                    </div>

                                    {/* Event card */}
                                    <div className="flex-grow">
                                        <div className="rounded-lg border border-primary/10 dark:border-background-light/10 bg-background-light dark:bg-background-dark/30 overflow-hidden">
                                            {/* Event image */}
                                            {event.image && (
                                                <div className="relative h-48 w-full">
                                                    <Image
                                                        src={event.image}
                                                        alt={event.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            )}

                                            {/* Event content */}
                                            <div className="p-6">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-grow">
                                                        <h3 className="text-lg font-unbounded font-bold text-primary dark:text-background-light">
                                                            {event.title}
                                                        </h3>
                                                        <p className="mt-1 text-sm text-primary/60 dark:text-background-light/60">
                                                            {event.date} • {event.location}
                                                        </p>
                                                    </div>
                                                    {event.eventLink && (
                                                        <Link
                                                            href={event.eventLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1 text-sm font-medium text-primary dark:text-background-light hover:opacity-70 transition-opacity"
                                                        >
                                                            View Event
                                                            <ExternalLink className="w-3 h-3" />
                                                        </Link>
                                                    )}
                                                </div>

                                                {/* Description */}
                                                {event.description && (
                                                    <p className="mt-3 text-sm text-primary/80 dark:text-background-light/80 leading-relaxed">
                                                        {event.description}
                                                    </p>
                                                )}

                                                {/* Organizers and Speakers */}
                                                <div className="mt-4 space-y-3">
                                                    {event.organizers && event.organizers.length > 0 && (
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <Users className="w-4 h-4 text-primary/60 dark:text-background-light/60" />
                                                                <span className="text-xs font-medium text-primary/60 dark:text-background-light/60 uppercase tracking-wider">
                                                                    Organized by
                                                                </span>
                                                            </div>
                                                            <div className="flex flex-wrap gap-1">
                                                                {event.organizers.map((organizer, idx) => (
                                                                    <span
                                                                        key={idx}
                                                                        className="inline-block px-2 py-1 text-xs bg-primary/5 dark:bg-background-light/5 rounded text-primary/70 dark:text-background-light/70"
                                                                    >
                                                                        {organizer}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {event.speakers && event.speakers.length > 0 && (
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <Mic className="w-4 h-4 text-primary/60 dark:text-background-light/60" />
                                                                <span className="text-xs font-medium text-primary/60 dark:text-background-light/60 uppercase tracking-wider">
                                                                    Speakers
                                                                </span>
                                                            </div>
                                                            <div className="flex flex-wrap gap-1">
                                                                {event.speakers.map((speaker, idx) => (
                                                                    <span
                                                                        key={idx}
                                                                        className="inline-block px-2 py-1 text-xs bg-primary/5 dark:bg-background-light/5 rounded text-primary/70 dark:text-background-light/70"
                                                                    >
                                                                        {speaker}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div >
    )
}