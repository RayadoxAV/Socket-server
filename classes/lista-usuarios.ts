import { Usuario } from "./usuario";

export class ListaUsuarios {
    private lista: Usuario[] = [];

    constructor() {}


    // Agrega un usuario a la lista de usuarios, retorna el usuario agregado
    public addUsuario(usuario: Usuario): Usuario {
        this.lista.push(usuario);

        console.log(this.lista);

        return usuario;
    }


    // Actualiza el nombre de un usuario basado en el id
    public actualizarNombre(idUsuario: string, nombreUsuario: string) {
        for(const usuario of this.lista) {
            if (idUsuario === usuario.id) {
                usuario.nombreUsuario = nombreUsuario;
                break;
            }
        }
        console.log('Usuario actualizado');
        console.log(this.lista);
    }

    // Obtener lista de usuarios

    public getListaUsuarios() {
        return this.lista;
    }

    // Obtener un usuario basado en el id

    public getUsuarioById(idUsuario: string) {
        return this.lista.find((usuario: Usuario) => usuario.id === idUsuario);
    }

    // Obtener una lista de usuarios basado en el nombre de la sala en la que estan

    public getUsuariosBySala(nombreSala: string) {
        return this.lista.filter((usuario: Usuario) => usuario.sala === nombreSala);
    }

    // Borrar un usuario basado en el id, retorna el usuario borrado

    public borrarUsuario(idUsuario: string) {
        const tempUsuario = this.getUsuarioById(idUsuario);
        this.lista = this.lista.filter((usuario: Usuario) => usuario.id !== idUsuario);
        return tempUsuario;
    }
}