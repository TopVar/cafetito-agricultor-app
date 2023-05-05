
    export interface VehiculoInterface{
        placaVehiculo: string;
        estadoVehiculo: number;
        marcaVehiculo: string;
        modeloVehiculo: number;
        colorVehiculo: string;
        tipoVehiculo: string;
        pesoVehiculo: number;
        usuarioCreacion: string;
        fechaCreacion: Date;
    }

    export interface VehiculoDto{
        placa: string;
        marca: string;
        modelo: number;
        color: string;
        tipo: string;
        peso: number;
    }