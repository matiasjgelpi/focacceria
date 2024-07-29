import Image from "next/image";
import Bricks from "../Bricks/bricks";

export function FrontPage() {
  const content = {
    title: "La focaccia mdp",
    subtitle: "Tradición y Sabor Mediterráneo",
    description: [
      "El sabor y el buen hacer de toda la cocina italiana.",
      "A base de harina, aceite de oliva y sal.",
      "Nacida en la Edad Media en el puerto de Génova, conquistando corazones en todo el mundo.",
    ],
  };
  return (
    <main className=" flex px-12 max-sm:px-4 flex-col gap-4 justify-center items-center">
      <div className="flex w-fit max-sm:h-[200px] justify-center relative">
        <h1 className="absolute left-10  max-sm:left-5  top-4    text-6xl max-sm:text-3xl  font-extrabold uppercase">
          {content.title}{" "}
        </h1>
        <Image
          className="rounded-3xl "
          src="/images/front/fotoPortada.png"
          alt="focaccia front page"
          width={1920}
          height={800}
        />
        <p className=" max-sm:text-sm absolute  top-1/2  max-sm:top-14 left-10 max-sm:left-5 uppercase font-bold text-red-600 max-sm:bg-slate-400 max-sm:bg-opacity-60 max-sm:rounded-sm">
          {content.subtitle}
        </p>
      </div>
      <div
        className=" font-bold w-full p-10 flex justify-center items-center bg-white bg-opacity-80 rounded-3xl
          
          "
      >
        <ul>
          {content.description.map((desc, index) => (
            <li
              key={index}
              className="text-center text-xl max-sm:text-xs uppercase text-red-600 "
            >
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
