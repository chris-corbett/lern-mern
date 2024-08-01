const Project = require("../models/ProjectModel");
const mongoose = require("mongoose");

// GET all projects
const getProjects = async (req: any, res: any) => {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    res.status(200).json(projects);
};

// GET project by id
const getProjectById = async (req: any, res: any) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid project id" });
    }

    const project = await Project.findById(id);
    if (!project) {
        return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(project);
};

// POST project
const createProject = async (req: any, res: any) => {
    const { title, description } = req.body;
    try {
        const project = await Project.create({ title, description });
        res.status(200).json(project);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE project
const deleteProject = async (req: any, res: any) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid project id" });
    }

    const project = await Project.findByIdAndDelete(id);
    if (!project) {
        return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(project);
};

// PATCH project
const updateProject = async (req: any, res: any) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid project id" });
    }

    const project = await Project.findByIdAndUpdate(
        id,
        { ...req.body },
        {
            new: true,
        }
    );
    if (!project) {
        return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(project);
};

module.exports = {
    getProjects,
    getProjectById,
    createProject,
    deleteProject,
    updateProject,
};

export {}; // This is needed to avoid a TypeScript error
