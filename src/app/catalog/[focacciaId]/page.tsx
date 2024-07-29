import Image from "next/image";
import data from "../../../data/data.json";

export default function Product({
  params,
}: {
  params: { focacciaId: string };
}) {
  const focaccia = data.find(
    (focaccia) => focaccia.id === Number(params.focacciaId)
  );

  return (
    <div className="bg-red-700 bg-opacity-20 flex flex-col items-center justify-center">
      <h1 className="text-7xl p-4 font-bold">{focaccia?.nombre}</h1>
      <div className="flex">
        <Image
          className="rounded-2xl"
          src={focaccia?.image_url ?? ""}
          width={600}
          height={600}
          alt={focaccia?.descripcion ?? ""}
        ></Image>
        <div className="w-1/2 flex p-4 flex-col items-center justify-center bg-slate-400 bg-opacity-25 rounded-2xl">
          <p className="py-10 text-2xl font-semibold">
            {focaccia?.descripcion}
          </p>

          <p className="p-10 font-extrabold text-8xl text-red-700">
            US$ {focaccia?.precio}
          </p>
        </div>
      </div>
      <ul className="py-4">
      <p className=" text-2xl font-semibold">
            Con que se hace?
          </p>

        {focaccia?.ingredientes?.map((ingrediente, index) => (
          <li key={index} className="flex justify-center text-xl font-semibold">{ingrediente}</li>
        )) ?? []}
      </ul>
    </div>
  );
}
