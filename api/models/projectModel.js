import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Name is required"]
        },
        title:{
            type: String,
            required: [true, "Title is required"]
        },
        description: {
            type: String,
            required: [true, "Description is required"]
        },
        type : {
            type: String,
            enum: ["web", "3d"],
            required: true
        },
        url: String,
        assetFile: String,
        mainImage: {
            type: String,
            required: [true, "Main Image is required"]
        },
        images: [
            {
                url: {type:String, required: true},
                caption: String,
                alt: String,
                order: Number
            }
        ]
    },
    {timestamps: true}
)


const Project = mongoose.model("Project", projectSchema);

export default Project;