import Link from "next/link";

const vehicles = [
  { v: "car", b: "Ford" },
  { v: "car", b: "Ferrari" },
  { v: "car", b: "Chevrolet" },
  { v: "car", b: "Toyota" },
  { v: "moto", b: "Suzuki" },
  { v: "moto", b: "Honda" },
];

export default function Details() {
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
