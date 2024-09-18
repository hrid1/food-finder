// import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleMeal = () => {
  const data = useLoaderData();
  const {
    idMeal,
    strMeal,
    strCategory,
    strMealThumb,
    strTags,
    strInstructions,
  } = data.meals[0];
  //   console.log(idMeal);
  console.log(data.meals[0]);

  return (
    <div className="min-h-screen md:w-4/5 mx-auto">
      <div className="container mx-auto p-6">
        <div className="bg-gray-900 shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{strMeal}</h1>

            <p className="text-gray-300 text-lg mb-2">
              <strong>Category:</strong> {strCategory}
            </p>

            {strTags && (
              <p className="text-gray-400 text-sm mb-4">
                <strong>Tags:</strong> {strTags.split(",").join(", ")}
              </p>
            )}

            <img
              className="w-3/5 md:h-96 mx-auto rounded-md my-4 object-cover"
              src={strMealThumb}
              alt={strMeal}
            />

            <h2 className="text-2xl font-semibold mb-3 text-gray-300">
              Instructions
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              {strInstructions}
            </p>

            <a
              href={`https://www.themealdb.com/meal/${idMeal}`}
              className="inline-block text-indigo-500 hover:text-indigo-700 font-medium text-lg"
            >
              View Meal on TheMealDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
