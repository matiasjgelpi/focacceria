import Image from "next/image";
import Link from "next/link";

import { NavBar } from "../components/NavBar/nav-bar";
import { FrontPage } from "../components/FrontPage/front-page";
import ProductsList from "../components/ProductsList/products-list";
import Bricks from "../components/Bricks/bricks";

export default function Home() {
  return (
    <Bricks>
      <NavBar></NavBar>
      <FrontPage></FrontPage>
      <ProductsList></ProductsList>
    </Bricks>
  );
}
