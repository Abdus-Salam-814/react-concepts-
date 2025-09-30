import Banner from "../component/Banner/Banner";
import Heading from "../component/Headding/Heading";


const Home = () => {
    return (
        <div >
          
        {/* Banner here */}
        <Banner></Banner>
        {/* heading */}
        <Heading title={'Browse Coffees by Category'} subtitel={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></Heading>    
        {/* categories  tab section */}
      
        {/* Dynamic nested component */}

        </div>
    );
};

export default Home;