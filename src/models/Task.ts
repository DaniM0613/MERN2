import mongoose, {Schema, Document, Types} from 'mongoose'


//Objeto en typescript se escriben en minuscula
export interface ITask extends Document {
    name: string
    description: string
    project: Types.ObjectId
}


//Los objetos en mongoose (tipo de dato) se escriben en Mayuscula
export const TaskSchema : Schema = new Schema ({
    name: {
        type: String,
        trim: true, 
        required: true
    },
    description: {
        type: String,
        trim: true, 
        required: true
    },
    project: {
        type: Types.ObjectId,
        ref: 'Project'
    }
},{timestamps: true})
const Task = mongoose.model<ITask>('Task', TaskSchema)
export default Task