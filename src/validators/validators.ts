import { body } from 'express-validator'
import { validaterrors } from '../middleware'


export const createUserValidation = [
    body('name')
        .trim()
        .toLowerCase()  // Transformar a minúsculas
        .notEmpty().withMessage('El campo name es requerido !!')
        .matches(/^[a-zA-Z\s]+$/).withMessage('El campo name solo acepta letras y espacios'),
    body('email')
         .trim()
         .toLowerCase()
         .notEmpty().withMessage('El campo email es requerido !!')
         .isEmail().withMessage('El campo debe de estar en un formato valido de email'),
    body('password')
         .trim()
         .notEmpty().withMessage('El campo password es requerido !!')
         .isLength({ min: 8 }).withMessage('El campo password debe tener al menos 8 caracteres'),
    validaterrors
]

export const loginValidation = [
    body('email')
         .trim()
         .toLowerCase()
         .notEmpty().withMessage('El campo email es requerido !!')
         .isEmail().withMessage('El campo debe de estar en un formato valido de email'),
    body('password')
         .trim()
         .notEmpty().withMessage('El campo password es requerido !!')
         .isLength({ min: 8 }).withMessage('El campo password debe tener al menos 8 caracteres'),
    validaterrors
]