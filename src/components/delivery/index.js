import React from "react";
import { restaurants } from "../../data/restaurants";
import ExploreSection from "../common/exploreSection";

import Filters from "../common/filters";

import "./delivery.css";
import DeliveryColletions from "./deliveryCollections";
import TopBrands from "./topBrands";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 3,
    title: "Rating: 4.0+",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Cuisines",
  },
  {
    id: 6,
    title: "More Filters",
  },
];

const restaurantsList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryColletions />
      <br />
      <TopBrands />
      <br />
      <br />
      <ExploreSection
        restaurants={restaurantsList}
        collectionName="Order food Online in Delhi, NCR"
      />
    </div>
  );
};

export default Delivery;
