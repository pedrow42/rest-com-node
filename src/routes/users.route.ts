import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';

const usersRoute = Router();
const ok = StatusCodes.OK

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction)=>{
    const users = <string[]>[];
    res.status(ok).send({users})
})

usersRoute.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid
    res.status(ok).send({uuid})
})

usersRoute.post('/users/:uuid', (req: Request, res: Response, next: NextFunction)=>{
    const newUser = req.params.uuid
    res.status(StatusCodes.CREATED).send(newUser)
})

usersRoute.put('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.status(ok).send(modifiedUser)
})

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;