import { Outlet } from "react-router-dom";
import NavBar from "../component/Navbar/NavBar";
import Footer from "../component/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            {/* NaveBar here */}
           <div className="">
              <NavBar></NavBar>
           </div>
            {/* Outlet here */}
              <div className="min-h-[calc(100vh-125px)]">
                
                <Outlet></Outlet>
                
                 </div>


            {/* Footer here */}
          <Footer></Footer>





        </div>
    );
};

export default MainLayout;