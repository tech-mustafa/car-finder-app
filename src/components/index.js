import React, { useState, useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import SearchBar from "./partials/SearchBar";
import "../styles/App.css";
import CarsList from "./partials/CarsList";

import getAllMakes from "../graphql-queries/GetAllMakes";
import getCarImages from "../graphql-queries/GetCarImages";

const App = () => {
  const [initialImage, setInitialImage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { loading: carMakeLoading, data: allCarMakes } = useQuery(getAllMakes);
  const [
    getCarsListQuery,
    { loading: carListLoading, data: carsList },
  ] = useLazyQuery(getCarImages);

  const getCarsList = (searchQuery) => {
    setSearchQuery(searchQuery);
    getCarsListQuery({
      variables: { carName: searchQuery },
    });
  };

  useEffect(() => {
    if (carsList && carsList.getCarImages && carsList.getCarImages.length) {
      setInitialImage(carsList.getCarImages[0].imageUrl);
    } else {
      setInitialImage("");
    }
  }, [carsList]);

  return (
    <div>
      <SearchBar
        allCarMakes={allCarMakes}
        carMakeLoading={carMakeLoading}
        getCarsList={getCarsList}
        initialImage={initialImage}
      />
      <div className="container">
        {!carListLoading && carsList && (
          <CarsList
            carsList={carsList.getCarImages}
            searchQuery={searchQuery}
          />
        )}
      </div>
    </div>
  );
};

export default App;
