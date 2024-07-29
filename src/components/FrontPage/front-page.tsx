import Image from "next/image";
import Bricks from "../Bricks/bricks";

export function FrontPage() {
  const content = {
    title: "La focaccia mdp",
    subtitle: "Tradición y Sabor Mediterráneo",
    description:
      "Si hay un producto que resume la naturalidad, el sabor y el buen hacer de toda la cocina italiana, este es sin lugar a dudas la focaccia. Esta sencilla y tradicional elaboración mediterránea se hace a base de harina, aceite de oliva y sal. Desde su fuerte aparición durante la Edad Media en el puerto de Génova, ha conseguido conquistar corazones en todo el mundo hasta convertirse en un básico imprescindible en la carta o menú de cualquier establecimiento.",
  };
  return (
 
      <main className=" flex px-12 flex-col gap-4 justify-center items-center">


        <div className="flex w-fit justify-center relative">
        <h1 className="absolute left-5 p-4 text-6xl  font-extrabold uppercase">
          {content.title}{" "}
        </h1>
          <Image
            className="rounded-3xl"
            src="/images/front/fotoPortada.png"
            alt="focaccia front page"
            width={1920}
            height={800}
          />
          <p className="absolute top-1/2 left-10 uppercase font-bold text-red-600">{content.subtitle}</p>
        </div>
        <div
          className=" font-bold w-full  flex justify-center items-center bg-white bg-opacity-80 p-4 rounded-3xl
          
          "
        >
          <p>{content.description}</p>
        </div>
      </main>
    // </Bricks>
  );
}
