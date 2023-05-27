import React from "react";

const FoodCard = ({ item }) => {
  const { name, recipe, image, catergory, price } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-zinc-800 text-white px-2 rounded  absolute right-0 mr-4 mt-4">
          {price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
