import { Link, NavLink, useLoaderData, useParams } from "react-router-dom";

const Categories = ({categories}) => {

    // const {category} = useParams();
    // console.log(category);

    const data = useLoaderData();
    console.log(data);

    return (
        <div className="text-center space-x-4 my-8 " >

            <div role="tablist" class="tabs tabs-lift justify-center gap-6">
            {
                categories.map(category => <NavLink to={`/category/${category.category}`} role="tab" class="tab ">{category.category}</NavLink>)

            }
            </div>

            



        </div>
    );
};

export default Categories;