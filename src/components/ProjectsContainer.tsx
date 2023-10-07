import { experiences } from 'src/utils/personalInfo';
import ProjectCard from './ProjectCard';

const ProjectsContainer = () => {
    return (
        <div className="flex flex-col w-full">
            {
                Object.keys(experiences)
                    .filter(key => experiences[key].type.includes("project"))
                    .map(key => (
                        <ProjectCard key={key} {...experiences[key]} />
                    ))
            }
        </div>
    );
};

export default ProjectsContainer;
