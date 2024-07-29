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
      <h1 className="text-7xl max-sm:text-3xl max-sm:text-center p-4  font-bold">{focaccia?.nombre}</h1>
      <div className="flex max-sm:flex-col">
        <Image
          className="rounded-2xl max-sm:px-3"
          src={focaccia?.image_url ?? ""}
          width={600}
          height={600}
          alt={focaccia?.descripcion ?? ""}
        ></Image>
        <div className="w-1/2 max-sm:w-full  flex p-4 max-sm:p-3 flex-col items-center justify-center bg-slate-400 bg-opacity-25 rounded-2xl">
          <p className="py-10 max-sm:py-2 text-2xl max-sm:text-xl max-sm:text-center font-semibold">
            {focaccia?.descripcion}
          </p>

          <p className="p-10 max-sm:p-5 font-extrabold text-8xl max-sm:text-center max-sm:text-6xl text-red-700">
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
