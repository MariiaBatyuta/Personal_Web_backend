import Project from "../models/projectModel.js";

export const getProjects = async (_, res, next) => {
    try {
        const projects = await Project.find();

        res.status(200).send(projects);
    } catch (error) {
        next(error);
    }
};