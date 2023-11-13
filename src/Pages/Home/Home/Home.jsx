
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularManu from "../PopularManu/PopularManu";
import Bisstro from "./BissTrow/Bisstro";
import Feature from "./Feature/Feature";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularManu></PopularManu>
            <Bisstro></Bisstro>
            <Feature></Feature>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;