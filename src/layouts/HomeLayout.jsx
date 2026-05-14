import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <header className="">
        <nav className="navbar bg-pink-100 fixed top-0 z-10">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="mt-20">
        <Outlet></Outlet>
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
