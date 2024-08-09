import { useProjectsContext } from "../hooks/UseProjectsContext";

const ProjectDetails = ({ project }: { project: any }) => {
    const { dispatch } = useProjectsContext();

    const handleClick = async () => {
        const response = await fetch(
            `http://localhost:4000/api/projects/${project._id}`,
            {
                method: "DELETE",
            }
        );

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: "DELETE_PROJECT", payload: json });
        }
    };

    return (
        <div className="flex shadow-lg m-4 p-2 rounded-lg bg-white min-h-20 ">
            <div>
                <h1 className="text-lg font-bold text-gray-900">
                    {project.title}
                </h1>
                <p className="text-gray-900">
                    {project.description &&
                        `Description ${project.description}`}
                </p>
            </div>
            <div className="ml-auto">
                <button className="border-collapse border-2 text-gray-900 border-yellow-400 bg-yellow-400 rounded-lg p-2 px-4 min-w-20 my-2 ml-2 shadow-lg hover:border-solid hover:border-yellow-500">
                    Edit
                </button>
                <button
                    onClick={handleClick}
                    className="border-collapse border-2 text-gray-900 border-red-400 bg-red-400 rounded-lg p-2 px-4 min-w-20 my-2 ml-2 shadow-lg hover:border-solid hover:border-red-500"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ProjectDetails;
