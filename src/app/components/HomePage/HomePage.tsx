import React, {useEffect} from "react";
import RecipeCard from "../RecipieCard/RecipieCard";
// import FavouriteButton from "../Private/FavouriteButton";

const HomePage = ({recipes}) => {
  console.log("HomePage data", recipes);
  return (
    <div className="home">
      <ul className="results">
        {recipes.length &&
          recipes.map((recipe) => (
            <li className="results__item" key={recipe.id}>
              <RecipeCard data={recipe} />
              {/* {user.loggedIn ? <FavouriteButton id={recipe.id} /> : null} */}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default HomePage;
