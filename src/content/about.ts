export interface Experience {
    company: string,
    role: string,
    start: {
        year: number,
        month: number
    },
    end?: {
        year: number,
        month: number
    },
    desc : string,
    link?: string,
}

export const DESCRIPTION : string = "Designer, developer, and everything in between. Passionate about creating fun, user-centric experiences."

export const OBSESSIONS : string[][] = [
    ["house", "https://www.imdb.com/role/tt0412142/"]
    , ["yogurt coffee", "https://delightfulplate.com/vietnamese-yogurt-coffee-sua-chua-cafe/"]
    , ["junkie by frederic", "https://www.youtube.com/watch?v=VTUgZ3-Ovws"]
]

export const RESUME_URL : string = "/"

export const EXPERIENCE : Experience[] = [
    {
        company: "Rocqqs",
        role: "UI/UX Designer",
        start: {
            year: 24,
            month: 11
        },
        desc: "Conducting user/market research and creating low- and high-fidelity design prototypes for Rocqq's web-based platform."
    },
    {
        company: "PeopleWeave",
        role: "Product Manager/Project Lead",
        start: {
            year: 23,
            month: 4
        },
        desc: "Currently leading project teams and managing launch of the PeopleWeave platform (coming Spring 25!). Previously built data scrapers, querying tools, and disambiguation methods as part of the Data Platform team."
    },
    {
        company: "University of Illinois Department of Mathematics",
        role: "Course Assistant",
        start: {
            year: 24,
            month: 1
        },
        desc: "Providing support to MATH 257 - Linear Algebra students in weekly labs and office hours and reviewing coding assignments."
    },
    {
        company: "Mizuho Bank",
        role: "Data Engineering Intern",
        start: {
            year: 24,
            month: 7
        },
        end: {
            year: 24,
            month: 8
        },
        desc: "Developed ETL pipelines implementing SCDs to combine and version business data into data warehouse. Designed and conducted design reviews of fact/dimension schemas and SQL data processing rules."
    },
    {
        company: "akaBot",
        role: "AI Engineering Intern",
        start: {
            year: 23,
            month: 6
        },
        end: {
            year: 23,
            month: 8
        },
        desc: "Adapted previous research to build a deep neural network model for rectifying and recognizing Vietnamese scene text, and cleaned and preprocessed training data."
    },
]

export const OTHER : { title: string, text: string, link?: string }[] = [
    {
        title: "Cyber 9/12",
        text: "I'll be participating in the upcoming Cyber 9/12 Strategy Challenge in February 2025. Shoutout to my awesome teammates and coach!"
    },
    {
        title: "Project: Code at UIUC",
        text: "I'm currently serving as the president of Project: Code, a student organization founded to provide students of all academic backgrounds an opportunity to learn and develop their skills across a variety of Computer Science areas/domains.",
        link: "https://www.projectcodeuiuc.org"
    }
]