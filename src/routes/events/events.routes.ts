import { Router } from 'express'
import { getEvents,createEvents,updateEvents,deleteEvents } from '../../controllers';
import { validarJwt } from '../../middleware';
import { createEventValidator } from '../../validators';

export const eventsRouter = Router();

eventsRouter.use(validarJwt)

eventsRouter.get('/',getEvents)
eventsRouter.post('/',createEventValidator,createEvents)
eventsRouter.put('/:id',updateEvents)
eventsRouter.delete('/:id',deleteEvents)