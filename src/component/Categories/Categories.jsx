import { Link, NavLink, useLoaderData, useParams } from "react-router-dom";

const Categories = ({categories}) => {

    // const {category} = useParams();
    // console.log(category);

    const data = useLoaderData();
    console.log(data);

    return (
        <div className="text-center space-x-4 my-8 " >

            <div role="tablist" className="tabs tabs-lift justify-center  w-full">
            {
                categories.map(category => <NavLink to={`/category/${category.category}`} role="tab" className={({ isActive }) => `tab ${isActive ? 'tab-active':'' } text-xl font-bold `}>{category.category}</NavLink>)

            }

           
            </div>

            



        </div>
    );
};

export default Categories;