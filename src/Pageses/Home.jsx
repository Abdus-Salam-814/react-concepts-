import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../component/Banner/Banner";
import Heading from "../component/Headding/Heading";
import Categories from "../component/Categories/Categories";

const Home = () => {

    const categories = useLoaderData()
   

    return (
        <div >
          
        {/* Banner here */}
        <Banner></Banner>
        {/* heading */}
        <Heading title={'Browse Coffees by Category'} subtitel={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></Heading>    
        {/* categories  tab section */}
        <Categories categories={categories}></Categories>
        {/* Dynamic nested component */}
        <Outlet></Outlet>
        {/* <CoffeeCard></CoffeeCard> */}

        </div>
    );
};

export default Home;