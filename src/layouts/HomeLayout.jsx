import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <div>
      <header className="">
        <nav className="navbar bg-pink-100 fixed top-0 z-10">
          <Navbar></Navbar>
        </nav>
        <section>
          <Header></Header>
        </section>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default HomeLayout;
