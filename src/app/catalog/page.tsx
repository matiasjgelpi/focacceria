import ProductsList from "../../components/ProductsList/products-list";

export default function Catalog() {
  return (
    <div className=" mt-2 px-12 flex flex-col justify-center items-center">
      <h2 className="p-2 font-extrabold text-xl uppercase rounded bg-white  w-fit">
        Todas nuestras focaccias:
      </h2>
      <ProductsList highlightedOnly={false}></ProductsList>
    </div>
  );
}
