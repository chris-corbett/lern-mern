import { useEffect, useState } from "react";

// Components
import ProjectDetails from "../components/ProjectDetails";

const Home = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch("http://localhost:4000/api/projects");
            const json = await response.json();

            if (response.ok) {
                setProjects(json);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="home">
            {/* Projects List */}
            <div className="m-16">
                {projects &&
                    projects.map((project: any) => (
                        <ProjectDetails key={project._id} project={project} />
                    ))}
            </div>
        </div>
    );
};

export default Home;
