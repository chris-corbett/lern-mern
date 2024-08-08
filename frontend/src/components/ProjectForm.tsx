import { useState } from "react";
import { useProjectsContext } from "../hooks/UseProjectsContext";

const ProjectForm = () => {
    const { dispatch } = useProjectsContext();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const project = { title, description };

        const response = await fetch("http://localhost:4000/api/projects", {
            method: "POST",
            body: JSON.stringify(project),
            headers: { "Content-Type": "application/json" },
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        } else {
            setTitle("");
            setDescription("");
            setError(null);
            console.log("Project added successfully!", json);
            dispatch({ type: "CREATE_PROJECT", payload: json });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="top-0 flex flex-col p-8 bg-rose-200 w-auto mr-4"
        >
            <h3 className="text-lg font-bold drop-shadow-lg text-gray-900">
                Add a New Project Idea
            </h3>
            <label className="input-label">Project Idea:</label>
            <input
                className="project-input"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label className="input-label">
                Project Description (Optional):
            </label>
            <input
                className="project-input"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <button className="border-collapse border-2 text-gray-900 border-green-400 bg-green-400 rounded-lg p-2 my-2 mx-8 shadow-lg hover:border-solid hover:border-green-500">
                Add Idea
            </button>
            {error && <div className="text-red-500 max-w-full">{error}</div>}
        </form>
    );
};

export default ProjectForm;
