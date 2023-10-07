type ProjectInfo = {
    imageSrc: string;
    title: string;
    description: string;
    link: string;
    technologies: string[];
    started: string;
};

const ProjectCard = ({ imageSrc, title, description, link, technologies, started }: ProjectInfo) => {
    return (
        <div className="flex flex-col md:flex-row p-md py-2xl overflow-hidden hover:scale-110">
            {/* Image Section */}
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={imageSrc} alt={title} className="object-cover rounded-lg w-full md:w-1/3" />
            </a>

            {/* Info Section */}
            <div className="flex flex-col justify-between ml-0 md:ml-4 w-full md:w-2/3">
                <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-sm">{description}</p>
                    <ul>
                        {technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <p className="text-xs">Started: {started}</p>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Check it out
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
