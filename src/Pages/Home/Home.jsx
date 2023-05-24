import Featured from "../Featured/Featured";
import Banner from "./Banner/Banner";
import Catergory from "./Catergory/Catergory";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Catergory></Catergory>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;