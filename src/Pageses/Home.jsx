import Banner from "../component/Banner/Banner";
import Heading from "../component/Headding/Heading";

const Home = () => {
    return (
        <div >
          
        {/* Banner here */}
        <Banner></Banner>
        {/* heading */}
        <Heading title={'Our Popular Products'} subtitel={'You can explore your favorite coffee'}></Heading>    
        {/* categories  tab section */}
        {/* Dynamic nested component */}

        </div>
    );
};

export default Home;