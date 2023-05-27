import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../../src/assets/menu/banner3.jpg";
import pizzaImg from "../../../src/assets/menu/pizza-bg.jpg";
import saladImg from "../../../src/assets/menu/salad-bg.jpg";
import soupImg from "../../../src/assets/menu/soup-bg.jpg";
import dessertImg from "../../../src/assets/menu/dessert-bg.jpeg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import { Parallax } from "react-parallax";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./menuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>

      {/* main cover  */}
      <SectionTitle
        subHeading=" Dont miss todays offer"
        heading="todays offer"
      ></SectionTitle>

      {/* oferred menu Items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items  */}
      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertImg}
      ></MenuCategory>

      <MenuCategory items={pizza} img={pizzaImg} title={"Pizza"}></MenuCategory>
      <MenuCategory items={salad} img={saladImg} title={"Salad"}></MenuCategory>
      <MenuCategory items={soup} img={soupImg} title={"Soup"}></MenuCategory>
    </div>
  );
};

export default Menu;
