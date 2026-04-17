import { Router } from 'express'
import { getEvents,createEvents,updateEvents,deleteEvents } from '../../controllers';

export const eventsRouter = Router();

eventsRouter.get('/',getEvents)
eventsRouter.post('/',createEvents)
eventsRouter.put('/:id',updateEvents)
eventsRouter.delete('/:id',deleteEvents)