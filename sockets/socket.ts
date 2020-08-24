import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { ListaUsuarios } from '../classes/lista-usuarios';
import { Usuario } from '../classes/usuario';

export const usuariosConectados = new ListaUsuarios();


export const conectarUsuario = (usuarioSocket: Socket) => {

    const usuario = new Usuario(usuarioSocket.id);
    usuariosConectados.addUsuario(usuario);
};

// Configurar usuario - Login

export const login = (usuarioSocket: Socket, io: socketIO.Server) => {
    usuarioSocket.on('configurar-usuario', (payload: {nombre: string}, callback: (res: any) => {}) => {

        usuariosConectados.actualizarNombre(usuarioSocket.id, payload.nombre);

        callback({
            ok: true,
            message: `Usuario ${payload.nombre} configurado`
        });
    });
}


// Escuchar mensajes
export const mensaje = (usuario: Socket, io: socketIO.Server) => {
    usuario.on('mensaje', (payload: {remitente: string, cuerpo: string}, callback) => {
        console.log('Mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload);

    });
}

export const desconectar = (usuarioSocket: Socket) => {
    usuarioSocket.on('disconnect', () => {

        usuariosConectados.borrarUsuario(usuarioSocket.id)
        console.log('Usuario desconectado', usuarioSocket.id);
    });
}

