import mongoose, {Schema, Document} from 'mongoose'


//Objeto en typescript se escriben en minuscula
export interface ITask extends Document {
    name: string
    description: string
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
})
const Task = mongoose.model<ITask>('Task', TaskSchema)
export default Task