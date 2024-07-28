export default function Product({ params }: { params: { product: string } }) {
  return (
    <p>
      ruta dinamica
      {params.product}
    </p>
  );
}
