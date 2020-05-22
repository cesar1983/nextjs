import { useRouter } from "next/router";
import Link from "next/link";

export default function Brand() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h2>
        {router.query.vehicle}: {router.query.brand}
      </h2>
      <Link href="/details">
        <a>Back</a>
      </Link>
    </div>
  );
}
