require("dotenv").config();

const express = require("express");
const app = express();

const projectsRouter = require("./routes/projects");

// Middleware
app.use(express.json());
app.use((req: any, res: any, next: any) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use("/api/projects", projectsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

export {}; // This is needed to avoid a TypeScript error