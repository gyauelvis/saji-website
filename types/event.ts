export interface Event {
  id: number
  title: string
  date: string
  location: string
  type: 'upcoming' | 'past'
  description?: string
  registrationLink?: string
  image?: string
  eventLink?: string
  organizers?: string[]
  speakers?: string[]
}