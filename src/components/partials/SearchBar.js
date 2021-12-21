import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import Dropdown from "./Dropdown";
import getAllModels from "../../graphql-queries/GetAllModels";

const SearchBar = (props) => {
  const [allCarMakes, setAllCarMakes] = useState([]);
  const [allCarModels, setAllCarModels] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedBrandName, setSelectedBrandName] = useState(null);
  const [getModelData, { data: carModels }] = useLazyQuery(getAllModels);

  useEffect(() => {
    if (props.allCarMakes && props.allCarMakes.getAllMakes) {
      let makes = [];
      for (
        let index = 0;
        index < props.allCarMakes.getAllMakes.length;
        index++
      ) {
        const carMake = props.allCarMakes.getAllMakes[index];
        makes.push({
          value: carMake.Make_ID,
          label: carMake.Make_Name,
        });
      }
      setAllCarMakes(makes);
    }
  }, [props.allCarMakes]);

  useEffect(() => {
    if (carModels && carModels.getCarModels) {
      let models = [];
      for (let index = 0; index < carModels.getCarModels.length; index++) {
        const carMake = carModels.getCarModels[index];
        models.push({
          value: carMake.Model_Name,
          label: carMake.Model_Name,
        });
      }
      setAllCarModels(models);
    }
  }, [carModels]);

  const handleSearch = (e) => {
    e.preventDefault();
    props.getCarsList(`${selectedBrandName} ${selectedModel}`);
  };

  const handleBrandSelect = (selectedBrand) => {
    if (selectedBrand) {
      setSelectedBrand(selectedBrand.value);
      setSelectedBrandName(selectedBrand.label);
      getModelData({
        variables: { makeID: selectedBrand.value },
      });
    } else {
      setSelectedBrand(null);
      setSelectedModel(null);
      setSelectedBrandName(null);
      setAllCarModels([]);
    }
  };

  const handleModelSelect = (selectedModel) => {
    if (selectedModel) {
      setSelectedModel(selectedModel.value);
    } else {
      setSelectedModel(null);
    }
  };

  const textCss = `.search-wrapper {
  height: 500px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 ${props.initialImage ? "5px" : "0"} #dbdada;
}
.search-wrapper::after {
  content: "";
  background: url("${props.initialImage}");
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
  background-size: 100% 500px
}`;
  return (
    <div className="search-wrapper">
      {/* This style tag is inserted here to decrease the opicity 
      of the dynamically inserted  BG Image with pesudo selectors*/}
      <style>{textCss}</style>
      <Dropdown
        label="Car Brands"
        options={allCarMakes}
        onSelect={handleBrandSelect}
        disabled={props.carMakeLoading}
      />
      <Dropdown
        label="Brand Models"
        options={allCarModels}
        onSelect={handleModelSelect}
        disabled={allCarModels && allCarModels.length ? false : true}
      />

      <button
        className="btn btn-dark btn-circle"
        disabled={selectedModel && selectedBrand ? false : true}
        onClick={handleSearch}
      >
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
