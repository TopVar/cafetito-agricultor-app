export interface MensajeInterface {
    idMensaje: number; 
    numeroCuenta: string;
    placaVehiculo: string;
    idParcialidad: number;
    parcialidades: number;
    totalPesaje: number;
    codigoEstado: number;
    mensaje: string;
    aprobado: number;
    correccion: number;
    usuarioCreacion: string;
    fechaCreacion: Date;
    idCuentaCorriente: number;
}