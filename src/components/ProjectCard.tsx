
function ProjectCard({ imageSrc, title, description, link }: { imageSrc: string, title: string, description: string, link: string }) {
    return (
        <a href={link} target="_blank" className="hover:scale-110 p-md py-2xl overflow-hidden">
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={imageSrc} alt={title} style={{ objectFit: "cover", fill: "true" }} className="rounded-lg" />
        </a>
    )
}

export default ProjectCard