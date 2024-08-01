import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    _id: {type: String},
    project_type: {type: String},
    project_name: {type: String},
    description: {type: String},
    web_url: {type: String},
    git_url: {type: String},
    preload_img: {type: String},
});

const Project = mongoose.model("Project", projectSchema, "Projects");
export default Project;