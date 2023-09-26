import React, {useEffect} from "react";
import Image from "next/image";
import Stats from "../../components/Stats";
import RecipieCard from "../../components/RecipieCard/RecipieCard";
import FavouriteButton from "../../components/Private/FavouriteButton";
import {Recipe} from "@/app/types/Types";

const getData = async (id: number) => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return await res.json();
};

export default async function RecipeCardDetails({
  params,
}: {
  params: {id: number};
}) {
  console.log("params", params);
  const recipe: Recipe = await getData(params.id);
  console.log("recipe", recipe.analyzedInstructions);
  const price = recipe.pricePerServing / 100;
  const newPrice = price.toFixed(2);

  return (
    <div className="single-recipe">
      <div className="img">
        <Image src={recipe.image} alt={recipe.title} fill />
      </div>
      <Stats data={recipe} isDetailsPage />
      <div className="title-container container">
        <h2 className="title ">{recipe.title}</h2>
        <p className="source">
          Recipe by <strong>{recipe.sourceName}</strong>
        </p>
      </div>

      <div className="single-recipe__text container">
        <p
          className="summary"
          dangerouslySetInnerHTML={{__html: recipe.summary}}
        />
      </div>
      <div className="single-recipe__ingredients list container">
        <h2>Ingredients:</h2>
        <ul>
          {recipe.extendedIngredients.map((i, index) => {
            return i === null ? null : (
              <li key={index}>
                {i.original}
                <span>
                  ({i.measures.metric.amount.toFixed(0)}
                  {i.measures.metric.unitLong})
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="single-recipe__features"
        // onClick={user.loggedIn ? null : () => history.push("/account")}
      >
        {/* {user.loggedIn ? <FavouriteButton id={recipe.id} /> : null}
        {user.loggedIn
          ? user.user.favourites.includes(recipe.id)
            ? "Remove"
            : "Save"
          : "Save"} */}
      </div>

      <div className="single-recipe__instructions list container">
        <h2>Method:</h2>

        {recipe.analyzedInstructions.map((step) => {
          return (
            <div className="method-steps" key={step.name}>
              <h3>{step.name}</h3>
              <ul>
                {step.steps.map((x) => (
                  <li key={x.number}>{x.step}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="similar-recipes">
        <h2 className="container">Similar Recipes</h2>
        <ul className="results" id="similar">
          {/* {similarrecipe.map((recipe) => (
            <li key={recipe.id} className="results__item">
              <RecipieCard recipe={recipe} />
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
