const express = require("express");
const router = express.Router();

router.get("/", (req: any, res: any) => {
    res.json({ message: 'GET all projects'})
});

router.get("/:id", (req: any, res: any) => {
    res.json({ message: 'GET project by id'})
});

router.post("/", (req: any, res: any) => {
    console.log(req.body);
    res.json({ message: 'POST project'})
});

router.delete("/:id", (req: any, res: any) => {
    res.json({ message: 'DELETE project'});
});

router.patch("/:id", (req: any, res: any) => {
    res.json({ message: 'PATCH project'});
});

module.exports = router;

export {}; // This is needed to avoid a TypeScript error