import { body } from 'express-validator'
import { validaterrors } from '../../middleware'

export const createEventValidator = [
    body('title')
        .trim()
        .toLowerCase()  // Transformar a minúsculas
        .notEmpty().withMessage('El campo name es requerido !!'),
    body('note')
        .notEmpty().withMessage('El campo note es requerido !!'),
    body('start')
        .notEmpty().withMessage('El campo fecha inicial es requerido !!')
        .matches(/^\d{4}-\d{2}-\d{2}$/)
        .withMessage('La fecha debe estar en formato DD-MM-YYYY'),
    body('end')
        .notEmpty().withMessage('El campo fecha final es requerido !!')
        .matches(/^\d{4}-\d{2}-\d{2}$/)
        .withMessage('La fecha debe estar en formato DD-MM-YYYY'),
    validaterrors
]