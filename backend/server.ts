require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const projectRouter = require("./routes/ProjectRouter");

// Middleware
app.use(express.json());
app.use((req: any, res: any, next: any) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use("/api/projects", projectRouter);

// Database connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((error: any) => {
        console.log(error);
    });

export {}; // This is needed to avoid a TypeScript error
