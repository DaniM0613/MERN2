import { Router } from 'express'
import { body, param } from 'express-validator'
import { ProjectController } from '../controllers/ProjectController'
import { handleInputErrors } from '../middleware/Validation'
import { TaskController } from '../controllers/TaskController'
import { projectExist } from '../middleware/project'
import { taskExist } from '../middleware/task'


const router = Router()

router.post('/', 
    body('projectName')
      .notEmpty().withMessage('El nombre del Proyecto es Obligatorio'),
    body('clientName')
      .notEmpty().withMessage('El nombre del Cliente es Obligatorio'),
    body('description')
      .notEmpty().withMessage('El nombre del Proyecto es Obligatorio'),
    handleInputErrors, 
    ProjectController.createProject
)
router.get('/', ProjectController.getAllProjects)

router.get('/:id', 
  param('id').isMongoId().withMessage('ID no valido',),
  handleInputErrors,
  ProjectController.getProjectById
)

router.put('/:id',
  param('id').isMongoId().withMessage('ID no valido',),
  body('projectName')
      .notEmpty().withMessage('El nombre del proyecto es obligatorio'),
  body('clientName')
      .notEmpty().withMessage('El nombre del cliente es obligatorio'),
  body('description')
      .notEmpty().withMessage('La descripcion del Proyecto es obligatorio'),
  handleInputErrors,
  ProjectController.updateProject
)

router.delete('/:id', 
  param('id').isMongoId().withMessage('ID no valido',),
  handleInputErrors,
  ProjectController.deleteProject
)

/** Routes for tasks */
router.param('projectId', projectExist)

router.post('/:projectId/tasks',
   body('name')
      .notEmpty().withMessage('El nombre de la tarea es obligatorio'),
   body('description')
      .notEmpty().withMessage('La descripcion de la tarea es obligarotia'),
   handleInputErrors,
   TaskController.createTask

)
router.get('/:projectId/tasks',
  TaskController.getProjectTask
)

router.param('taskId', taskExist)

router.get('/:projectId/tasks/:taskId',
  param('taskId').isMongoId().withMessage('ID no valido'),
  handleInputErrors,
  TaskController.getTaskById
)

router.put('/:projectId/tasks/:taskId',
  param('taskId').isMongoId().withMessage('ID no valido'),
  body('name')
      .notEmpty().withMessage('El nombre de la tarea es Obligatorio'),
  body('description')
      .notEmpty().withMessage('La descripcion de la tarea es Obligatorioa'),
  handleInputErrors,
  TaskController.updateTask
)

router.delete('/:projectId/tasks/:taskId',
  param('taskId').isMongoId().withMessage('ID no valido'),
  handleInputErrors,
  TaskController.deleteTask
)

router.post('/:projectId/tasks/:taskId/status', 
  param('taskId').isMongoId().withMessage('ID no valido'),
  body('status')
     .notEmpty().withMessage('El estado es obligatorio'),
  handleInputErrors,
  TaskController.updateStatus
)
export default router