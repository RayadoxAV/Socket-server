import {Router, Request, Response} from 'express';
import Server from '../classes/server';

export const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Todo chido mijo'
    })
});

router.post('/mensajes', (req: Request, res: Response) => {

    const body = req.body.body;
    const user = req.body.user;

    const payload = {
        remitente: user,
        cuerpo: body
    };

    const server = Server.instance;
    server.io.emit('mensaje-nuevo', payload);

    res.json({
        ok: true,
        body,
        user,
        mensaje: 'Todo verga brother'
    });
});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body.body;
    const remitente = req.body.user;

    const payload = {
        remitente,
        body
    };

    const server = Server.instance;
    server.io.in(id).emit('mensaje-privado', payload);

    res.json({
        ok: true,
        body,
        remitente,
        id
    });
});