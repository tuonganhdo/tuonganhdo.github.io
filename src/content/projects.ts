export interface Project {
    id: string,
    title: string,
    roles: string[],
    tools: string[],
    affiliation?: string,
    timeframe: string,
    contributors?: string[],
    description?: string,
    link?: string,
}

export const PROJECTS : Project[] = [
    {
        id: 'pw-visual-identity',
        title: 'Refreshed Visual Identity',
        roles: ['Designer'],
        tools: ['Figma'],
        affiliation: 'PeopleWeave',
        timeframe: 'Oct 2024',
        description: 'An updated visual identity guide for PeopleWeave containing typefaces, colors, and components.',
    },
    {
        id: 'rocqqs-post-payment',
        title: 'Closing Flow',
        roles: ['UI/UX Designer'],
        tools: ['Figma'],
        affiliation: 'Rocqqs',
        timeframe: 'Nov 2024 - Present',
        description: 'Chat, payment, and document signing screens for users going through the process of closing on a property.',
    },
    {
        id: 'project1',
        title: 'Project 1',
        roles: ['UI/UX Designer'],
        tools: ['Figma'],
        timeframe: 'Past - Present',
        description: 'Here is a project description.'
    }
]