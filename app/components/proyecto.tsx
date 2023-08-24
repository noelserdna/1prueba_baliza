import Image from 'next/image';
import React from 'react';

interface ProyectoProps {
  imagen: string;
  ubicacion: string;
  inversionTotal: number;
  precioPorNft: number;
  duracionExplotacion: number;
  inicioRenta: number;
  rentabilidadMediaAnual: number;
}

const Proyecto: React.FC<ProyectoProps> = ({
  imagen,
  ubicacion,
  inversionTotal,
  precioPorNft,
  duracionExplotacion,
  inicioRenta,
  rentabilidadMediaAnual,
}) => {
  return (
    <div className="flex flex-col">
      <img alt={ubicacion} src={imagen} />
      <div className="flex flex-col gap-4">
        <p className="mt-6 mb-8">{ubicacion}</p>
        <hr className="border-2" />
        <div className="flex justify-between w-full">
          Inversión Total
          <p>{inversionTotal}</p>
        </div>
        <hr className="border-2" />
        <div className="flex justify-between w-full">
          Precio por NFT
          <p>{precioPorNft}</p>
        </div>
        <hr className="border-2" />
        <div className="flex justify-between w-full">
          Duración explotación
          <p>{duracionExplotacion}</p>
        </div>
        <hr className="border-2" />
        <div className="flex justify-between w-full">
          Inicio Renta
          <p>{inicioRenta}</p>
        </div>
        <hr className="border-2" />
        <div className="flex justify-between w-full">
          Rentabilidad media anual
          <p>{rentabilidadMediaAnual}</p>
        </div>
        <hr className="border-2" />
      </div>
      <button className="bg-yellow-300 text-black w-3/4 self-center py-2 rounded-lg my-10">
        Ver Proyecto
      </button>
    </div>
  );
};

export default Proyecto;
