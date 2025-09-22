import { Event } from '@/types/event'

export const upcomingEvents: Event[] = [
    {
        id: 1,
        title: "Hacktoberfest 2025: Code & Contribute",
        date: "October 1-31, 2025",
        location: "Online",
        type: 'upcoming',
        description: "Join us for Hacktoberfest 2025! Contribute to Saji and help build Ghana's open geospatial dataset.",
        registrationLink: "#"
    }
]

export const pastEvents: Event[] = [
    {
        id: 2,
        title: "Code & Contribute: Hacktoberfest 2024 Edition",
        date: "October 5, 2024",
        location: "Virtual Event",
        type: 'past',
        image: "/cac24.jpeg", // Placeholder for the event banner
        description: "Get ready to dive into the world of open source with a splash of fun at 'Code and Contribute: Hacktoberfest Edition | EPISODE #1'! Join us for an exciting virtual gathering hosted by Campus Code in collaboration with the Association Computer Engineering Students and Computer Science Society of KNUST, Wikitech Student Developers and Code for Change. Whether you're a seasoned coder or just starting out, this event was your golden ticket to explore, learn, and contribute to open source projects while connecting with a vibrant community of like-minded enthusiasts.",
        eventLink: "https://luma.com/ex3804wr",
        organizers: ["Campus Code", "Association Computer Engineering Students", "Computer Science Society of KNUST", "Wikitech Student Developers", "Code for Change"],
        speakers: ["Ditiro-Botswana", "Abigail MesereNyame", "Ignacio Palma"]
    },
]
