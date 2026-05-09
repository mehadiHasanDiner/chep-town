import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className=" flex justify-center items-center ">
      <div className="card-body bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin}>
          <h1 className="text-2xl font-bold text-center pt-5">Login now</h1>

          <fieldset className="fieldset">
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="btn bg-linear-to-r from-purple-600 to-pink-500 text-white mt-4"
            >
              Login
            </button>
            <p className="my-3 text-center">
              New to our website. Please{" "}
              <Link
                className="text-pink-600 underline hover:font-semibold"
                to="/register"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
        <div className="space-y-2">
          <button className="btn btn-neutral w-full">
            <FcGoogle size={24} /> Login with Google
          </button>
          <button className="btn btn-primary w-full">
            <FaGithub size={24} /> Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
