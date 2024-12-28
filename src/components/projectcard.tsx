import { Project } from '@/content/projects'

export default function ProjectCard({project} : {project : Project}) {
    return(
        <div className="w-full aspect-square rounded-lg bg-white bg-opacity-5 p-10">
            <p>{project.title}</p>
            <p>{project.timeframe}</p>
            <p>{project.description}</p>
        </div>
    );
}