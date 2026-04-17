import { Router } from 'express'
import { getEvents } from '../../controllers';

export const eventsRouter = Router();

eventsRouter.get('/',getEvents)