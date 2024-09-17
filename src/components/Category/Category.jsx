import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Category = ({ category }) => {
  //   console.log(category);
  const { strCategory, strCategoryThumb, strCategoryDescription } = category;
  const categoryInfo =
    strCategoryDescription.length > 200
      ? strCategoryDescription.slice(0, 200)
      : strCategoryDescription;

  return (
    <div>
      <div className="card card-compact bg-base-300 h-full shadow-xl p-4">
        <figure>
          <img src={strCategoryThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{strCategory}</h2>
          <p className="my-2">{categoryInfo}</p>
          <div className="card-actions justify-end">
            <Link to={`/category/${strCategory}`}>
              {" "}
              <button className="btn btn-primary text-slate-800">
                More Info
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object,
};

export default Category;
