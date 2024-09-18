import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MealCard = ({ meal }) => {
  const { strMeal, strMealThumb, idMeal } = meal;

  return (
    <>
      <div className="card h-full bg-gray-900  shadow-xl">
        <figure className="md:px-10 md:pt-10 px-2">
          <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="md:card-title">{strMeal}</h2>
          <p>{}</p>
          <div className="card-actions">
            <button className="btn btn-primary"> <Link to={`/meal/${idMeal}`}>Bye now</Link> </button>
          </div>
        </div>
      </div>
    </>
  );
};

MealCard.propTypes = {
  meal: PropTypes.object,
};

export default MealCard;
