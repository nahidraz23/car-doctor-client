import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="my-32">
                <About></About>
            </div>
            <div className="my-32">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;