// Importer les bibliotheques necessaire depuis mongoose
import { Schema, model, models } from 'mongoose'

import { ITask } from '@/types'

const taskSchema = new Schema<ITask>({
    task: {
        type: String,
        required: [true, 'Task is required. '],
    },
    completed: {
        type: Boolean,
        default: false
    }
})


// Creer un model mongoose base sur TaskSchema pour representer les taches. 
const Task = models.Task || model<ITask>('Task', taskSchema)

export default Task;