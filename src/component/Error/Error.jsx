import { useNavigation } from "react-router-dom";


const Error = () => {
    let nevigate = useNavigation();

    const navigator = () =>{
        nevigate ('/');
    }
    
   

    return (
        <div>
            <button onClick={navigator()} className="btn btn-warning">Home</button>
        </div>
    );
};

export default Error;