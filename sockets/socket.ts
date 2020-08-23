import { Socket } from 'socket.io';
import socketIO from 'socket.io';

export const desconectar = (usuario: Socket) => {
    usuario.on('disconnect', () => {
        console.log('Usuario desconectado');
    })
}

// Escuchar mensajes
export const mensaje = (usuario: Socket, io: socketIO.Server) => {
    usuario.on('mensaje', (payload: {remitente: string, cuerpo: string}, callback) => {
        console.log('Mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload);

    });
}