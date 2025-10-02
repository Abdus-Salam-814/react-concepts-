const Card = ({ coffee }) => {
  const { name, image,  category, type, origin, popularity, rating} = coffee;

  return (
    <div>
      <div className="card bg-base-200 shadow-sm">
        <figure>
          <img src={`${image}`} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-xl">
            Category: {category}
          </p>
          <p className="text-xl">
            Type: {type}
          </p>
          <p className="text-xl">
            Origin: {origin}
          </p>
          <p className="text-xl">
            rating: {rating}
          </p>
          <p className="text-xl">
            popularity: {popularity}
          </p>
          <div className="card-actions justify-end">
           </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
