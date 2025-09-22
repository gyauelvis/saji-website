import { Contributor } from '@/types/contributor'

export const topContributors: Contributor[] = [
    {
        id: 1,
        name: "Kwame Mensah",
        contributions: 1234,
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW8MeX48zCGZYI6bq2AtFgO23kXn3Z8HAVV1iJJkxeyyrIMtCkIBADnCh3-Gp7IdSlnSW39qh4GZsQwJrpGGndl2MVp-Tj1bvQhOAkTllgKou4Zc8jykVyTJxNoHrZ63yAz6TQUGG4uJdWBroY7zODRHpjOaxfSuXVUVNLivM6KK0CncxfC5TTnuQ5eZ7WDM0HDRrG7rhzR-ya47moRhTta0VXLHcQcIueC4Ac0FDuxcl5RwLOGU2Y4VMuT7ct0dgfEedZwVrteUw",
        rank: 1
    },
    {
        id: 2,
        name: "Aisha Abubakar",
        contributions: 987,
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCurqyYBpTbArjLqkbpqpxZsde0Fc7sMJatqYueQd52fAbEjp-jq8jGCfKEOK82ZxzOw35Lkk7iCwSyX4Wtut3e0z2sDj-UnxPLqoOsDRWNwNxKwx3-OcstRCktHZ0uG6Hm5_ilLWkaF6ONH2ZvTQP400Hish68M2PKvpy8-yTH0yKxo6RWWcdRN54wwCsXDHJ70xcHaPrHm5gt-mtGILvgUkF0Ind6n5ZIiMdFW4IemTZxV9JxF3xLDNL2eCLgxqMyvkz9nI2fVmI",
        rank: 2
    },
    {
        id: 3,
        name: "Yaw Boateng",
        contributions: 765,
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPb9jIRkk93vlBf1W7gBKKIClOLejJh6g1xQZMtHZqzvl4eK6vVSlGQNN83h0zIWVQSJqcWwY-sacOHtBjdWozeKyX3dU9HNl4vvrw1zni8sy6lfGrV0IEOUYhoKdHpQ3Yj8PRkAUbFi1dFB1A-EWse1z9ZQDsS4P4c8J3PYr9pQDowQJAhe7zQkDQAFu97Ft_6NgPz3mqiWNnLe5q6IhwwXoJcH7oJFhnWc0iqVYiunRF9h2IhDEkJeAb7l__FZXzF5u0Br8OKc8",
        rank: 3
    }
]

export const allContributors: Contributor[] = [
    ...topContributors,
    {
        id: 4,
        name: "Esi Asantewa",
        contributions: 543,
        avatar: "",
        rank: 4
    },
    {
        id: 5,
        name: "Kofi Amoah",
        contributions: 432,
        avatar: "",
        rank: 5
    },
    {
        id: 6,
        name: "Adwoa Owusu",
        contributions: 321,
        avatar: "",
        rank: 6
    },
    {
        id: 7,
        name: "Kwasi Appiah",
        contributions: 210,
        avatar: "",
        rank: 7
    },
    {
        id: 8,
        name: "Akosua Mensah",
        contributions: 109,
        avatar: "",
        rank: 8
    },
    {
        id: 9,
        name: "Kwame Nkrumah",
        contributions: 98,
        avatar: "",
        rank: 9
    },
    {
        id: 10,
        name: "Ama Serwaa",
        contributions: 87,
        avatar: "",
        rank: 10
    }
]
