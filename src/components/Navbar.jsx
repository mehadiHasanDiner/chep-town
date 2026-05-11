import { NavLink } from "react-router";
import { Link } from "react-router";
import { RiMenu2Fill } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const emailSlice = user?.email.slice(0, 2).toUpperCase();

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logout successful");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/blogs">
        <li>Blogs</li>
      </NavLink>
      <NavLink to="/about-us">
        <li>About Us</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar  w-11/12  mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiMenu2Fill color="#FF1493" />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-5 shadow gap-2"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="flex">
          <p className="text-2xl font-bold color-primary">Chef Town</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 gap-5 ">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-hover dropdown-center">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-circle text-lg bg-linear-to-r from-purple-600 to-pink-500 border border-black text-white w-11 h-11"
            >
              {emailSlice}
            </button>

            <ul tabIndex="-1" className="dropdown-content menu z-1">
              <li>
                <button onClick={handleLogout} className="btn btn-primary">
                  <BiLogIn size={20} />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary bg-linear-to-r from-purple-600 to-pink-500 border-0">
              <BiLogIn size={20} />
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
