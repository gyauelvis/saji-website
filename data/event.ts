import { Event } from '@/types/event'

export const upcomingEvents: Event[] = [
    {
        id: 1,
        title: "Code & Contribute: Hacktoberfest Edition 2025 (Episode 1)",
        date: "October 11, 2025 • 7:00 PM GMT",
        location: "Virtual Event",
        type: 'upcoming',
        description: "We're kicking off this year's Code & Contribute: Hacktoberfest Edition with an exciting first session! Join us as Mesrenyame Dogbe shares insights on 'Making Money in Open Source' — uncovering the opportunities, strategies, and real stories that prove open source can be both impactful and rewarding. This event also marks the official introduction of our community-driven open-source project: Saji 🌍. Saji is building an open dataset of Ghana's Points of Interest (schools, hospitals, markets, landmarks, and more) — starting with Accra and Kumasi.",
        registrationLink: "https://luma.com/n1sp52q5",
        speakers: ["Mesrenyame Dogbe"],
        image: "/ep1.jpg",
    },
    {
        id: 2,
        title: "Code & Contribute: Hacktoberfest Edition 2025 (Episode 2)",
        date: "October 18, 2025 • 7:00 PM GMT",
        location: "Virtual Event",
        type: 'upcoming',
        description: "Dive deep into the world of open source licensing in our second episode! Understanding licenses is crucial for any developer contributing to or creating open source projects. Learn about different license types, what they mean for your contributions, and how to choose the right license for your projects. We'll also continue exploring contribution opportunities with Saji and other exciting open source projects.",
        registrationLink: "#",
        speakers: ["TBD"]
    },
    {
        id: 3,
        title: "Code & Contribute: Hacktoberfest Edition 2025 (Episode 3)",
        date: "October 25, 2025 • 7:00 PM GMT",
        location: "Virtual Event",
        type: 'upcoming',
        description: "Open source isn't just about writing code! Join us for 'Beyond Code: How Non-Developers Shape Open Source' where we'll explore the many ways to contribute to open source projects — from documentation and design to community management and testing. Discover how your unique skills can make a meaningful impact in the open source ecosystem, regardless of your technical background.",
        registrationLink: "#",
        speakers: ["TBD"]
    },
    {
        id: 4,
        title: "Code & Contribute: Hacktoberfest Edition 2025 (Episode 4)",
        date: "November 1, 2025 • 7:00 PM GMT",
        location: "Virtual Event",
        type: 'upcoming',
        description: "Join us for our grand finale as we celebrate 'Stories from the Open Source Journey'! Hear inspiring personal experiences from contributors who've made their mark in open source. From first-time contributors to seasoned maintainers, discover the challenges, victories, and transformative moments that define the open source journey. We'll also showcase the amazing contributions made to Saji and other projects during this year's Hacktoberfest!",
        registrationLink: "#",
        speakers: ["TBD"]
    }
]

export const pastEvents: Event[] = [
    {
        id: 5,
        title: "Code & Contribute: Hacktoberfest 2024 Edition",
        date: "October 5, 2024",
        location: "Virtual Event",
        type: 'past',
        image: "/cac24.jpeg",
        description: "Get ready to dive into the world of open source with a splash of fun at 'Code and Contribute: Hacktoberfest Edition | EPISODE #1'! Join us for an exciting virtual gathering hosted by Campus Code in collaboration with the Association Computer Engineering Students and Computer Science Society of KNUST, Wikitech Student Developers and Code for Change. Whether you're a seasoned coder or just starting out, this event was your golden ticket to explore, learn, and contribute to open source projects while connecting with a vibrant community of like-minded enthusiasts.",
        eventLink: "https://luma.com/ex3804wr",
        organizers: ["Campus Code", "Association Computer Engineering Students", "Computer Science Society of KNUST", "Wikitech Student Developers", "Code for Change"],
        speakers: ["Ditiro-Botswana", "Abigail MesereNyame", "Ignacio Palma"]
    },
]