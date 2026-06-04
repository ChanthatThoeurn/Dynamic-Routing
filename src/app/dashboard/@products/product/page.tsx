
import Link from "next/link";
import ProductComponent from "@/src/components/productComponent/productComponent";
import { ProductExtral } from "@/src/lib/product/productExtral";
import { Suspense } from "react";

async function getProducts() {
  const res = await fetch(
    process.env.ISHOP_API_URL + "/products",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch products");

  const { content } = await res.json();
  return content as ProductExtral[];
}
function Loading() {
  return (
    <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
  <span className="sr-only">Loading...</span>
  <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
  <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
  <div className="h-8 w-8 bg-black rounded-full animate-bounce" />
</div>

  )
}
export default function ProductPageRoute() {
  return (
    <div>
      <div className="w-full h-full flex flex-col items-center justify-start gap-4 p-4">
        <Link href="/dashboard/create">Create new product</Link>
        <Link href="/dashboard/edit">Edit product</Link>
      </div>

      <Suspense fallback={<Loading />}>
        <ProductPage />
      </Suspense>
    </div>
  );
}
async function ProductPage() {
  const products = await getProducts();
  return (
    <div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products?.map(({ uuid, thumbnail, name, priceOut }: ProductExtral) => (
          <ProductComponent
            key={uuid}
            uuid={uuid}
            thumbnail={thumbnail}
            name={name}
            priceOut={priceOut}
          />
        ))}
      </div>
    </div>
  );
}