import { NavBar } from "../components/NavBar/nav-bar";
import { FrontPage } from "../components/FrontPage/front-page";
import ProductsList from "../components/ProductsList/products-list";
import Bricks from "../components/Bricks/bricks";
import Footer from "../components/Footer/footer";

export default function Home() {
  return (
    <Bricks>
      <NavBar></NavBar>
      <FrontPage></FrontPage>
      <div className=" mt-2 px-12 flex flex-col justify-center items-center">
        <h2 className="p-2 font-extrabold text-xl uppercase rounded bg-white  w-fit">
          Nuestras recomendaciones:
        </h2>
        <ProductsList highlightedOnly={true}></ProductsList>
      </div>
      <Footer></Footer>
    </Bricks>
  );
}
