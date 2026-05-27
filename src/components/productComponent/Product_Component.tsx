
import { ProductExtral } from "@/src/lib/product/productExtral";
import Image from "next/image";

export default function ProductComponent({
  uuid,
  thumbnail,
  priceOut,
  name,
}: ProductExtral) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      
      <div className="relative flex h-72 items-center justify-center bg-gray-100 p-4">
        <Image
          src={thumbnail}
          alt={name}
          width={400}
          height={400}
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

     
      <div className="space-y-5 p-5">

       
        <div className="flex items-center justify-between gap-3">
          <h2 className="line-clamp-1 text-2xl font-bold text-gray-900">
            {name}
          </h2>

          <span className="rounded-xl bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            ${priceOut}
          </span>
        </div>

      
        <div className="flex gap-3">
          <button className="flex-1 rounded-2xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700">
            Buy Now
          </button>

          <button className="rounded-2xl border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}