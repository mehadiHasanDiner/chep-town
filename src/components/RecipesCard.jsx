import React from "react";
import { FaStar, FaUtensils } from "react-icons/fa";

const RecipesCard = ({ recipe }) => {
  const { recipeName, ingredients, cookingMethod, rating, recipeImage } =
    recipe;

  return (
    <div className="bg-base-100 shadow-xl rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">
      {/* Recipe Image */}
      <figure className="h-60 overflow-hidden">
        <img
          src={recipeImage}
          alt={recipeName}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </figure>

      {/* Card Body */}
      <div className="p-6">
        {/* Recipe Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{recipeName}</h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <FaStar className="text-yellow-400 text-xl" />

          <span className="font-semibold text-lg text-gray-700">{rating}</span>
        </div>

        {/* Ingredients */}
        <div className="mb-5">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-2">
            <FaUtensils className="text-orange-500" />
            Ingredients
          </h3>

          <div className="flex flex-wrap gap-2">
            {ingredients.map((item, index) => (
              <span
                key={index}
                className="badge badge-outline badge-primary px-3 py-3"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Cooking Method */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Cooking Method
          </h3>

          <p className="text-gray-600 leading-7">{cookingMethod}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
