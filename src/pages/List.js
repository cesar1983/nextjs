import Link from "next/link";
import { useState, useEffect } from "react";

export default function List({ vehicles }) {
  //   const [vehicles, setVehicles] = useState([]);
  //   useEffect(() => {
  //     async function loadVehicles() {
  //       await fetch("http://localhost:3000/api/vehicles")
  //         .then((response) => response.json())
  //         .then((data) => {
  //           console.log(data);
  //           setVehicles(data);
  //         })
  //         .catch((error) => {
  //           console.log("Error");
  //         });
  //     }
  //     loadVehicles();
  //   }, []);

  return (
    <div>
      {vehicles.map((e, k) => (
        <div key={k} style={{ padding: "5px" }}>
          <Link href="[vehicle]/[brand]" as={`/${e.v}/${e.b}`}>
            <a>
              {e.v} - {e.b}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

List.getInitialProps = async () => {
  let apiVehicles = null;
  await fetch("http://localhost:3000/api/vehicles")
    .then((response) => response.json())
    .then((data) => {
      apiVehicles = data;
    })
    .catch((error) => {
      console.log("Error");
    });

  return {
    vehicles: apiVehicles,
  };
};
