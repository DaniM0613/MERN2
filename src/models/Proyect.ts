import mongoose, {Schema, Document} from "mongoose";

//Objeto en typescript se escriben en minuscula
export interface IProject extends Document  {
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

const Project = mongoose.model<IProject>('Project', ProjectSchema)
export default Project