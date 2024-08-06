const ProjectDetails = ({ project }: { project: any }) => {
    return (
        <div className="shadow-lg m-4 p-2 rounded-lg bg-green-400">
            <h1 className="text-lg font-bold text-gray-900">{project.title}</h1>
            <p className="text-gray-900">{project.description}</p>
        </div>
    );
};

export default ProjectDetails;