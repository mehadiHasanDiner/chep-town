import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router";
import { Toaster, toast } from "react-hot-toast";

const ChefCard = ({ chef }) => {
  const {
    id,
    chefName,
    chefPicture,
    yearOfExperience,
    numberOfRecipes,
    likes,
  } = chef;

  const [likeClick, setLikeClick] = useState(likes);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleLikes = () => {
    const updatedLikes = likeClick + 1;
    setLikeClick(updatedLikes);
    toast.success("Thanks for giving Like");
    setIsDisabled(true);
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition duration-300">
      {/* Image */}
      <figure className="h-64 overflow-hidden">
        <img
          src={chefPicture}
          alt={chefName}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </figure>

      {/* Content */}
      <div className="card-body bg-linear-to-br from-slate-700 to-slate-800 text-white">
        <h2 className="card-title text-3xl font-bold text-pink-300">
          {chefName}
        </h2>

        <div className="space-y-2 text-gray-200 mt-3">
          <p className="text-lg">
            <span className="font-semibold">Year of Experience:</span>{" "}
            {yearOfExperience} years
          </p>

          <p className="text-lg">
            <span className="font-semibold">Number of Recipes:</span>{" "}
            {numberOfRecipes}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-6">
          <Toaster position="top-center" reverseOrder={false} />
          {/* Likes */}
          <button
            onClick={handleLikes}
            disabled={isDisabled}
            className={`flex items-center gap-3 bg-slate-900 px-5 py-3 rounded-2xl cursor-pointer ${
              isDisabled ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            <FaThumbsUp className="text-yellow-400 text-xl" />
            <span className="font-bold text-lg">
              {likeClick >= 1000
                ? `${(likeClick / 1000).toFixed(3)}K`
                : likeClick}
            </span>
          </button>

          {/* Button */}
          <Link to={`/chef/${id}`}>
            <button className="btn bg-indigo-950 hover:bg-indigo-900 border-none text-white rounded-full px-8">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
