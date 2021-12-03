import React from "react";
import SelectDropDown from "react-select-virtualized";

const Dropdown = (props) => {
  return (
    <div className="dropdown-wrapper">
      <label className="dropdown-label">{props.label}</label>
      <SelectDropDown
        options={props.options}
        className="dropdown"
        onChange={props.onSelect}
        isDisabled={props.disabled}
      />
    </div>
  );
};

export default Dropdown;
