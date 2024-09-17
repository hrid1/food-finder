import { useLoaderData, useParams } from "react-router-dom";
import MealCard from "../MealCard/MealCard";

const Categories = () => {
  const data = useLoaderData();
  const { categoryName } = useParams();
  const meals = data.meals;
  console.log(data.meals);
  return (
    <div>
      <h2 className="text-center text-3xl my-6 font-semibold text-blue-300">
        {" "}
        {`Explore our "${categoryName}" picks.`}
      </h2>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center mx-4 md:w-5/6 md:mx-auto">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal}></MealCard>
        ))}
      </section>
    </div>
  );
};

export default Categories;
