const Heading = ({title, subtitel}) => {
    return (
        <div>
            <div className="text-center my-8">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="text-xl mt-4">{subtitel}</p>
            </div>  
            
        </div>
    );
};

export default Heading;