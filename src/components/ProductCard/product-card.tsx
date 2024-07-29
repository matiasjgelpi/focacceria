import { Focaccia } from "../ProductsList/products-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "@/components/ui/button";

export default function ProductCard(props: Focaccia) {
  return (
    <Card className="w-[350px] bg-white bg-opacity-80 flex flex-col items-center">
      <CardHeader>
        <CardTitle className="text-lg">{props.nombre}</CardTitle>
        <CardDescription>{props.descripcion}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-red-600 text-2xl">US$ <span 
        className="text-red-600 text-4xl font-extrabold"
        >{props.precio}</span></p>
      </CardContent>
      <CardFooter className="w-full">
        <Button className="w-full">Ver más...</Button>
      </CardFooter>
    </Card>
  );
}
