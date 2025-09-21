import { Outlet } from "react-router-dom";
import NavBar from "../component/Navbar/NavBar";

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
<footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 mt-1.5">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>





        </div>
    );
};

export default MainLayout;