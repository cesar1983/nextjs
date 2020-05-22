import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Brand({ vehiclesList }) {
  const router = useRouter();

  const [vehicles, setVehicles] = useState(vehiclesList);

  useEffect(() => {
    async function loadVehicles() {
      await fetch(
        "http://localhost:3000/api/vehicles?vehicle=" +
          router.query.vehicle +
          "&brand=" +
          router.query.brand
      )
        .then((response) => response.json())
        .then((data) => {
          setVehicles(data);
          console.log("[loadVehicles]", data);
        })
        .catch((error) => {
          console.log("Error");
        });
    }

    if (vehiclesList.length == 0) {
      loadVehicles();
    }
  }, []);

  // console.log(router);

  const vehicleDetail =
    vehicles.length > 0 ? vehicles[0].v + ": " + vehicles[0].b : "Loading...";

  return (
    <div>
      <h2>{vehicleDetail}</h2>
      <br />
      <Link href="/list">
        <a>Back</a>
      </Link>
    </div>
  );
}

Brand.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { vehiclesList: [] };
  }

  const { query } = ctx;
  let apiVehicles = null;
  await fetch(
    "http://localhost:3000/api/vehicles?vehicle=" +
      query.vehicle +
      "&brand=" +
      query.brand
  )
    .then((response) => response.json())
    .then((data) => {
      apiVehicles = data;
    })
    .catch((error) => {
      console.log("Error");
    });

  console.log("[Brand.getInitialProps]", apiVehicles);

  return {
    vehiclesList: apiVehicles,
  };
};
