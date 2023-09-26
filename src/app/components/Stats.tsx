import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStar,
  faClock,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

type RecipeStats = {
  data: {
    readyInMinutes: number;
    spoonacularScore: number;
    servings: number;
    pricePerServing: number;
  };
  isDetailsPage: boolean;
};
const Stats = ({data, isDetailsPage = false}: RecipeStats) => {
  return (
    <div className="stats">
      <div className="stats__item">
        <FontAwesomeIcon icon={faClock} />
        <span>{data.readyInMinutes}</span>
      </div>
      <div className="stats__item">
        <FontAwesomeIcon icon={faStar} className="rating" />
        <span>{data.spoonacularScore}</span>
      </div>
      {isDetailsPage && (
        <div className="stats__item">
          <FontAwesomeIcon icon={faUsers} />
          <span>{data.servings}</span>
        </div>
      )}
      <div className="stats__item">
        <FontAwesomeIcon icon={faDollarSign} />
        <span>{data.pricePerServing.toFixed()}</span>
      </div>
    </div>
  );
};

export default Stats;
