import { useState } from "react";
import { useProjectsContext } from "../hooks/UseProjectsContext";

const EditForm = ({ project }: { project: any }) => {
    const { dispatch } = useProjectsContext();
    const _id = project._id;
    const [title, setTitle] = useState(project.title);
    const [description, setDescription] = useState(project.description);
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([] as any);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const project = { _id, title, description };

        const response = await fetch(
            `http://localhost:4000/api/projects/${_id}`,
            {
                method: "PATCH",
                body: JSON.stringify(project),
                headers: { "Content-Type": "application/json" },
            }
        );

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        } else {
            setError(null);
            setEmptyFields([]);
            dispatch({ type: "UPDATE_PROJECT", payload: json });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="top-0 flex flex-col p-8 bg-indigo-200 w-auto mr-4"
        >
            <h3 className="text-lg font-bold drop-shadow-lg text-gray-900">
                Add a New Project Idea
            </h3>
            <label className="input-label">Project Idea:</label>
            <input
                className={
                    "project-input " +
                    (emptyFields.includes("title") && "border-red-500 ")
                }
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

            {/* 66b27dbb036f6ef0f7b5f343 */}
            {/* 66b27dbb036f6ef0f7b5f343 */}

            <button className="border-collapse border-2 text-gray-900 border-green-400 bg-green-400 rounded-lg p-2 my-2 mx-8 shadow-lg hover:border-solid hover:border-green-500">
                Add Idea
            </button>
            {error && (
                <div className="text-red-500 max-w-full text-center bg-red-200 p-4 m-2 border-red-500 border-2 rounded-lg">
                    {error}
                </div>
            )}
        </form>
    );
};

export default EditForm;