import React from "react";
import CarCard from "./CarCard";

const CarsList = (props) => {
  return (
    <div className="row">
      {props.carsList &&
        props.carsList.map((car) => {
          return (
            <CarCard
              key={car.imageId}
              car={car}
              searchQuery={props.searchQuery}
            />
          );
        })}
    </div>
  );
};

export default CarsList;
