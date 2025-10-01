
const Card = ({category}) => {
 
    const {name, image, price} = category;

    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Card;