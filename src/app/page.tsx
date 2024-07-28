import Image from "next/image";
import Link from "next/link";

import { NavBar } from "../components/NavBar/nav-bar";
import { FrontPage } from "../components/FrontPage/front-page";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <FrontPage></FrontPage>
    </>
  );
}
