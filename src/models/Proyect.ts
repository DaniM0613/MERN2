import mongoose, {Schema, Document} from "mongoose";

//Objesto en typescript se escriben en minuscula
export type ProjectType = Document & {
    projectName: string
    clientName: string
    description: string
}

//Los objetos en mongoose (tipo de dato) se escriben en Mayuscula
const ProjectSchema: Schema = new Schema({
    projectName: {
        type: String,
        required: true,
        trim: true,
    },
  
    clientName:  {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },
})

const Project = mongoose.model<ProjectType>('Project', ProjectSchema)
export default Project