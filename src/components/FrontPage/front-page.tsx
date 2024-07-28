import Image from "next/image";

export function FrontPage() {
  const content = {
    description:
      "Si hay un producto que resume la naturalidad, el sabor y el buen hacer de toda la cocina italiana, este es sin lugar a dudas la focaccia. Esta sencilla y tradicional elaboración mediterránea se hace a base de harina, aceite de oliva y sal. Desde su fuerte aparición durante la Edad Media en el puerto de Génova, ha conseguido conquistar corazones en todo el mundo hasta convertirse en un básico imprescindible en la carta o menú de cualquier establecimiento.",
  };
  return (
    <main className="w-full flex p-4 gap-4 justify-center items-center bg-background">
      <div>
        <Image
          className="rounded-3xl"
          src="/images/front/focacciaPortadaDesktop.jpg"
          alt="focaccia principal"
          width={500}
          height={500}
        />
      </div>

      <div className="text-xs w-1/3">
        <p>{content.description}</p>
      </div>

    </main>
  );
}
