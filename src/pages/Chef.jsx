import { useLoaderData } from "react-router";
import { FaThumbsUp, FaUtensils, FaBriefcase } from "react-icons/fa";
import { useEffect, useState } from "react";

const Chef = () => {
  const chefsData = useLoaderData();
  const [recipes, setRecipes] = useState([]);
  const {
    id,
    chefName,
    chefPicture,
    yearOfExperience,
    numberOfRecipes,
    likes,
    shortBiography,
  } = chefsData;

  useEffect(() => {
    const url = `https://assignment-10-awesome-chefs-m-65-server.vercel.app/recipe/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);
  console.log(recipes);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Main Card */}
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image */}
        <div className="h-full">
          <img
            src={chefPicture}
            alt={chefName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          {/* Name */}
          <h1 className="text-5xl font-bold text-gray-800 mb-6">{chefName}</h1>

          {/* Biography */}
          <p className="text-gray-600 text-lg leading-8 mb-8">
            {shortBiography}
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Experience */}
            <div className="bg-slate-100 rounded-2xl p-5 text-center shadow">
              <FaBriefcase className="text-3xl mx-auto text-indigo-600 mb-3" />

              <h3 className="text-xl font-bold text-gray-800">
                {yearOfExperience}+
              </h3>

              <p className="text-gray-500">Years Experience</p>
            </div>

            {/* Recipes */}
            <div className="bg-slate-100 rounded-2xl p-5 text-center shadow">
              <FaUtensils className="text-3xl mx-auto text-orange-500 mb-3" />

              <h3 className="text-xl font-bold text-gray-800">
                {numberOfRecipes}
              </h3>

              <p className="text-gray-500">Recipes</p>
            </div>

            {/* Likes */}
            <div className="bg-slate-100 rounded-2xl p-5 text-center shadow">
              <FaThumbsUp className="text-3xl mx-auto text-pink-500 mb-3" />

              <h3 className="text-xl font-bold text-gray-800">{likes}</h3>

              <p className="text-gray-500">Likes</p>
            </div>
          </div>

          {/* Button */}
          <label
            htmlFor="recipe_modal"
            className="btn btn-primary mt-10 rounded-full w-full sm:w-fit px-10"
          >
            View Recipes
          </label>
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="recipe_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-11/12 max-w-3xl">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action">
            <label
              htmlFor="recipe_modal"
              className="btn btn-circle btn-ghost absolute right-2 top-2 hover:text-red-600"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
