import { useEffect } from "react";
import { useProjectsContext } from "../hooks/UseProjectsContext";

// Components
import ProjectDetails from "../components/ProjectDetails";
import ProjectForm from "../components/ProjectForm";

const Home = () => {
    const { projects, dispatch } = useProjectsContext();

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch("http://localhost:4000/api/projects");
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_PROJECTS", payload: json });
            }
        };

        fetchProjects();
    }, [dispatch]);

    return (
        <div className="flex bg-indigo-200">
            {/* Projects List */}
            <div className="m-16 flex-grow">
                {projects &&
                    projects.map((project: any) => (
                        <ProjectDetails key={project._id} project={project} />
                    ))}
            </div>
            <ProjectForm />
        </div>
    );
};

export default Home;
