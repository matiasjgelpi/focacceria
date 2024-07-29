import data from "../../data/data.json";
import ProductCard from "../ProductCard/product-card";

export interface Focaccia {
  id: number;
  nombre: string;
  descripcion: string;
  ingredientes: string[];
  precio: number;
}

export default function ProductsList() {
  const focaccias: Focaccia[] = data;
  return (
    <div className="flex justify-center gap-4 flex-wrap pt-4 px-8">
      {focaccias.map((f: Focaccia) => (
        <ProductCard key={f.id} {...f}></ProductCard>
      ))}
    </div>
  );
}
