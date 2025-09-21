import { Outlet } from "react-router-dom";
import NavBar from "../component/Navbar/NavBar";

const MainLayout = () => {
    return (
        <div>
            {/* NaveBar here */}
           <div className="">
              <NavBar></NavBar>
           </div>
            {/* Outlet here */}
              <div className="min-h-[calc(100vh-200px)]">
                
                <Outlet></Outlet>
                
                 </div>


            {/* Footer here */}


        </div>
    );
};

export default MainLayout;