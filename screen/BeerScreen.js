import React from "react";
import Beer from "../component/Beer";

const BeerScreen = (props) => {
  const {
    route: {
      params: { item }
    },
  } = props;

  return (
    <Beer item={item} />
  );
}

export default BeerScreen;
