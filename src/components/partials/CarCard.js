import React, { useState } from "react";
import Modal from "./Modal";
import { randomPriceGenerator } from "../../utilities/Helpers";

const CarCard = ({ car,searchQuery }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const price  = randomPriceGenerator()

  const handleCarClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(null);
  };

  return (
    <div className="col-sm-6 car-card" onClick={handleCarClick}>
      <div className="card card-wrapper">
        <img
          src={car.thumbnail}
          alt={car.imageId}
          className="card-img-top grid-image"
        />
        <div className="car-details">
          <span>&#8377; {price} Lakh</span>
        </div>
      </div>
      {(isModalOpen && (
        <Modal
          closeModal={closeModal}
          image={car.imageUrl}
          imageId={car.imageId}
          searchQuery={searchQuery}
          price={price}
          publishedDate={car.publishedDate}
        />
      )) || <></>}
    </div>
  );
};

export default CarCard;
