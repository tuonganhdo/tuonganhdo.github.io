export interface Highlight {
    name: string,
    row: {
        xs: number,
        sm: number
    },
    col: {
        xs: number,
        sm: number,
        lg: number
    },
    desc: string,
    url?: string
}

export const HIGHLIGHTS : Highlight[] = [
    {
        name: 'peopleweave',
        row: {
            xs: 1,
            sm: 1
        },
        col: {
            xs: 2,
            sm: 3,
            lg: 4
        },
        desc: "A platform to bridge the academic community."
    },
    {
        name: 'rocqqs',
        row: {
            xs: 5,
            sm: 2,
        },
        col: {
            xs: 3,
            sm: 1,
            lg: 1
        },
        desc: "A sleek, intuitive, and new-but-familiar user interface."
    },
    {
        name: 'headliner',
        row: {
            xs: 2,
            sm: 2
        },
        col: {
            xs: 1,
            sm: 5,
            lg: 6
        },
        desc: "A bite-sized, anti-echo chamber news reader."
    },
    {
        name: 'spaced out',
        row: {
            xs: 2,
            sm: 3,
        },
        col: {
            xs: 4,
            sm: 6,
            lg: 8
        },
        desc: "A tool for finding study spots on the go.",
        url: "https://illinois-spaced-out.vercel.app"
    },
    {
        name: 'journalytics',
        row: {
            xs: 4,
            sm: 4,
        },
        col: {
            xs: 2,
            sm: 2,
            lg: 3
        },
        desc: "A journal for discovering wellness trends through data."
    },
    {
        name: 'room-mate',
        row: {
            xs: 4,
            sm: 5,
        },
        col: {
            xs: 4,
            sm: 1,
            lg: 1
        },
        desc: "An all-in-one app for household costs and chores."
    },
    {
        name: 'home.o',
        row: {
            xs: 5,
            sm: 5
        },
        col: {
            xs: 1,
            sm: 4,
            lg: 6
        },
        desc: "An accessibility-focused smart home app."
    }
]