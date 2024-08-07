const express = require("express");
const router = express.Router();
const {
    getProjects,
    getProjectById,
    createProject,
    deleteProject,
    updateProject,
} = require("../controllers/ProjectController");

router.get("/", getProjects);

router.get("/:id", getProjectById);

router.post("/", createProject);

router.delete("/:id", deleteProject);

router.patch("/:id", updateProject);

module.exports = router;

export {}; // This is needed to avoid a TypeScript error
