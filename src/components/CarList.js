import CarCard from "./CarCard";

const CarList = ({ cars }) => (
  <div className="car-list">
    {cars.map((car) => (
      <CarCard key={car.id} car={car} />
    ))}
  </div>
);

export default CarList;
