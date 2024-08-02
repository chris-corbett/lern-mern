import { useEffect, useState } from "react";

const Home = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            // const response = await fetch("http://localhost:4000/api/projects");
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
            <div className="projects">
                {projects &&
                    projects.map((project: any) => (
                        <div key={project._id} className="project">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Home;
