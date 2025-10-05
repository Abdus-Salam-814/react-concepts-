import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {

  const navegate = useNavigate();

  const { category } = useParams();
  const data = useLoaderData();

  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    if(category){
          const filteredByCategory = [...data].filter(
        coffees => coffees.category === category
    )
    setCoffees(filteredByCategory)
    }else{
        setCoffees(data.slice(0, 6))
    }

  },[category, data])

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-x-4 p-12">
      {coffees.map((coffee) => (
        <Card key={coffee._id} coffee={coffee}></Card>
      ))}
    </div>

    <div className="p-12">
                 <button onClick={ () => navegate('/coffees')  } className="btn btn-warning ">All vew</button>

    </div>
    
    </>
  );
};

export default CoffeeCard;
