import { Router } from 'express'
import { body, param } from 'express-validator'
import { ProjectController } from '../controllers/ProjectController'
import { handleInputErrors } from '../middleware/Validation'

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

router.put('/:id'),
  param('id').isMongoId().withMessage('ID no valido',),
  body('projectName')
      .notEmpty().withMessage('El nombre del proyecto es obligatorio'),
  body('clientName')
      .notEmpty().withMessage('El nombre del cliente es obligatorio'),
  body('description')
      .notEmpty().withMessage('La descripcion del Proyecto es obligatorio'),
  handleInputErrors,
  ProjectController.updateProject

export default router