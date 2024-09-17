const Category = ({ category }) => {
//   console.log(category);
  const { strCategory, strCategoryThumb, strCategoryDescription } = category;
  const categoryInfo = 
    strCategoryDescription.length > 200 
      ? strCategoryDescription.slice(0, 200) 
      : strCategoryDescription
  
  return (
    <div>
      <div className="card card-compact bg-base-300 h-full shadow-xl p-4">
        <figure>
          <img
            src={strCategoryThumb}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{strCategory}</h2>
          <p className="my-2">{categoryInfo}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
