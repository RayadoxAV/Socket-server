export class Usuario {

    public id: string;
    public nombreUsuario: string;
    public sala: string;

    constructor(id: string) {
        this.id = id;
        this.nombreUsuario = 'sin-nombre';
        this.sala = 'sin-sala';
    }
}