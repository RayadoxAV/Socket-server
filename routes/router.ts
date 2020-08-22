import {Router, Request, Response} from 'express';

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

    res.json({
        ok: true,
        body,
        user,
        mensaje: 'Todo verga brother'
    });
});

router.post('/mensajes/:idMensaje', (req: Request, res: Response) => {
    const idMensaje = req.params.idMensaje;
    const body = req.body.body;
    const user = req.body.user;

    res.json({
        ok: true,
        body,
        user,
        idMensaje
    });
});