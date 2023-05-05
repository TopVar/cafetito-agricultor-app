import { TransportistaInterface } from "./transportista.interface";
import { VehiculoInterface } from "./vehiculo.interface";

    export interface CuentaBc{
        estadoCuenta: number;
        numeroCuenta: string;
        pesoTotal: number;
        cantidadParcialidades: number;
        usuarioCreacion: string;
        fechaCreacion: Date;
        vehiculosTransportistasAsignados: string;
    }

    export interface CuentaAgr{
        idCuentaCorriente: number;
        estadoCuenta: number;
        numeroCuenta: string;
        pesoTotal: number;
        cantidadParcialidades: number;
        usuarioCreacion: string;
        fechaCreacion: Date;
        vehiculosTransportistasAsignados: string;
    }

    export interface CuentaInterface{
        peso: number;
        cantidad: number;
        vehiculos: VehiculosAsignados[];
    }

    export interface VehiculosAsignados{
        placa: string;
        licencias: string[];
        detalleVehiculo: VehiculoInterface;
        transportistas: TransportistaInterface[];
    }
    
