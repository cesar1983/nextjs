const vehicles = [
  { v: "car", b: "Ford" },
  { v: "car", b: "Ferrari" },
  { v: "car", b: "Chevrolet" },
  { v: "car", b: "Toyota" },
  { v: "moto", b: "Suzuki" },
  { v: "moto", b: "Honda" },
  { v: "moto", b: "Harley" },
  { v: "moto", b: "Triumph" },
];

export default (req, res) => {
  res.statusCode = 200;

  let filteredVehicles = vehicles;
  if (req.query.vehicle) {
    filteredVehicles = vehicles.filter((vehicle) => {
      return vehicle.v === req.query.vehicle;
    });
  }

  if (req.query.brand) {
    filteredVehicles = filteredVehicles.filter((vehicle) => {
      return vehicle.b === req.query.brand;
    });
  }

  setTimeout(function () {
    res.json(filteredVehicles);
  }, 1000); // delay de 2 segundos para teste
};
