import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../component/Card/Card';

const Coffees = () => {

    const coffees = useLoaderData()
    return (
        <div>
           
               <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-x-4  p-12">
     
     
      {coffees.map((coffee) => (
        <Card key={coffee._id} coffee={coffee}></Card>

        
      ))}


    </div>
        </div>
    );
};

export default Coffees;