import Link from 'next/link';
import { BiRegistered } from 'react-icons/bi';
import proyectos from './datosProyectos.json';
import Proyecto from './components/proyecto';

export default function Home() {
  return (
    <main className="px-3 flex flex-col gap-14 items-center">
      {/* INICIO */}
      <div className="flex flex-col gap-8">
        <h1 className="text-[10vw] font-semibold">
          <span className="flex">INMOBILIZE&reg;</span>
          <span className="flex">DIVIDIMOS</span>

          <span className="flex"> PARA INVERTIR</span>
        </h1>
        <p>
          ¡Bienvenido a Inmobalize! El lugar idóneo para convertirte en inversor inmobiliario{' '}
          <span className="font-semibold underline">desde 100€</span>
        </p>
        <Link href={'/'} className="underline hover:underline-offset-2">
          Ver todos los proyectos
        </Link>
      </div>

      {/* REGÍSTRATE */}
      <div className="bg-welcome h-96 bg-cover bg-no-repeat w-full">
        <div className="flex flex-col items-center justify-between py-14 bg-white h-full z-50 bg-opacity-80">
          <div className="z-10 text-center">
            <p className="mb-5">
              BASTA SÓLO CON REGISTRARTE Y PASAR EL KYC <br /> PARA COMENZAR A INVERTIR EN
              INMUEBLES.
            </p>
            <p>¡POTENCIA TUS FINANZAS CON NUESTRA PLATAFORMA!</p>
          </div>
          <button className="bg-black text-white px-8 py-2 rounded-xl w-48">Regístrate</button>
        </div>
      </div>
      {/* ANUNCIO */}
      <p className="text-4xl ">DIVIDIR PARA INVERTIR</p>
      {/* ULTIMOS PROYECTOS */}
      <div className="bg-black  w-full text-white px-4 flex flex-col items-center max-w-6xl">
        <h2 className="py-10 self-start text-4xl">
          Últimos <br /> proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {proyectos.map((proyecto) => (
            <Proyecto
              imagen={proyecto.imagen}
              ubicacion={proyecto.ubicacion}
              inversionTotal={proyecto.inversionTotal}
              precioPorNft={proyecto.precioPorNft}
              duracionExplotacion={proyecto.duracionExplotacion}
              inicioRenta={proyecto.inicioRenta}
              rentabilidadMediaAnual={proyecto.rentabilidadMediaAnual}
            />
          ))}
        </div>
      </div>
      {/* PRIMEROS PASOS */}
      <div className="h-screen flex flex-col w-full px-4">
        <h2 className="justify-self-start text-4xl">Primeros pasos</h2>
        <p>¿Listo para invertir en inmuebles? ¡Estos son los pasos que debes de seguir!</p>
        <div className="flex gap-2 mt-10 w-full justify-evenly">
          <div className="flex flex-col items-center">
            <p className="hidden">REGÍSTRATE</p>
            <p className="text-4xl">01</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="hidden">HAZ TU KYC</p>
            <p className="text-4xl">02</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="hidden">SELECCIONA INVERSIÓN</p>
            <p className="text-4xl">03</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="hidden">TUS PARTICIPACIONES</p>
            <p className="text-4xl">04</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="hidden">LIQUIDEZ</p>
            <p className="text-4xl">05</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="hidden">TUS BENEFICIOS</p>
            <p className="text-4xl">06</p>
          </div>
        </div>
      </div>
    </main>
  );
}
