import data from "../../data/data.json";
import ProductCard from "../ProductCard/product-card";

export interface Focaccia {
  id: number;
  nombre: string;
  descripcion: string;
  ingredientes: string[];
  precio: number;
  highlight: boolean;
}

export default function ProductsList({
  highlightedOnly,
}: {
  highlightedOnly: boolean;
}) {
  const focaccias: Focaccia[] = !highlightedOnly
    ? data
    : data.filter((f) => f.highlight);
  return (
    <div className="flex w-full justify-center gap-2 flex-wrap ">
      {focaccias.map((f: Focaccia) => (
        <ProductCard key={f.id} {...f}></ProductCard>
      ))}
    </div>
  );
}
