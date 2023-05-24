import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import salad from '../../../assets/home/slide5.jpg'
const ChefRecommend = () => {
    return (
        <section>
            <SectionTitle
            heading = 'CHEF RECOMMENDS'
        subHeading='---Should Try--'
            ></SectionTitle>
            <div className="md:flex space-x-4 justify-center text-center">
                <div className="bg-gray-100 p-4 rounded">
                    <img className="w-424 h-300" src={salad} alt="" />
                    <h2 className="text-2xl font-semi-bold">Caeser Salad</h2>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 border-orange-500">Add to cart</button>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                    <img src={salad} alt="" />
                    <h2 className="text-2xl font-semi-bold">Caeser Salad</h2>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 border-orange-500">Add to cart</button>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                    <img src={salad} alt="" />
                    <h2 className="text-2xl font-semi-bold">Caeser Salad</h2>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 border-orange-500">Add to cart</button>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommend;