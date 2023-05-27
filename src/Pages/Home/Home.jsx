import Featured from "../Featured/Featured";
import Banner from "./Banner/Banner";
import Catergory from "./Catergory/Catergory";
import ChefRecommend from "./Chef Recommend/ChefRecommend";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            
            <Helmet>
             <title>Bistro | Home</title>
      </Helmet>
           <Banner></Banner>     
           <Catergory></Catergory>
           <PopularMenu></PopularMenu>
           <ChefRecommend></ChefRecommend>    
           <Featured></Featured>
           <Testimonials></Testimonials>  
        </div>
    );
};

export default Home;