import { Link, NavLink } from "react-router-dom";

const Categories = ({categories}) => {
    return (
        <div className="text-center space-x-4 my-8 " >

            <div role="tablist" class="tabs tabs-lift justify-center gap-6">
            {
                categories.map(category => <NavLink to={`/${category.slug}`} role="tab" class="tab ">{category.category}</NavLink>)

            }
            </div>
        </div>
    );
};

export default Categories;