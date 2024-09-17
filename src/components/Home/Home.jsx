import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Home = () => {
  const data = useLoaderData();
  // console.log(data.categories)
  const categories = data.categories;

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-8 text-gray-100">
        Pick a Category to Explore{" "}
      </h1>

      <section className="w-10/12 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 gap-6">
        {categories.map((category) => (
          <Category key={category.idCategory} category={category}></Category>
        ))}
      </section>
    </div>
  );
};

export default Home;
