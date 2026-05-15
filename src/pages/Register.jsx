import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className=" flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-xl text-center pt-4">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body ">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-xs text-error">{nameError}</p>}
            {/* Photo Url */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo Url"
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button
              type="submit"
              className="btn bg-linear-to-r from-purple-600 to-pink-500 text-white mt-4"
            >
              Register
            </button>

            <h2 className="text-center mt-2">
              Already have an Account? Please{" "}
              <Link
                to="/login"
                className="text-pink-600 underline hover:font-semibold"
              >
                Login
              </Link>
            </h2>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
