
import { ProductDetail } from "@/src/lib/product/productDetail";
import Image from "next/image";

interface ProductFullDetailPageProps {
  product: ProductDetail;
}

export default function ProductFullDetailPageComponent({
  product,
}: ProductFullDetailPageProps) {
  const {
    name,
    description,
    thumbnail,
    priceOut,
    discount,
    stockQuantity,
    availability,
    warranty,
    computerSpec,
    color,
    category,
    brand,
  } = product;

  const {
    processor,
    ram,
    storage,
    gpu,
    os,
    screenSize,
    battery,
  } = computerSpec || {};

  return (
    <section className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-zinc-950 p-6 shadow-2xl md:p-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="space-y-5">
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-black/40">
              <Image
                src={thumbnail}
                alt={name}
                fill
                className="object-contain p-6"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {color?.map((item) => (
                <button
                  key={item.color}
                  className="rounded-full border border-white/20 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
                >
                  {item.color}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center space-y-7">
            <div>
              <p className="mb-2 text-sm uppercase tracking-widest text-red-400">
                {brand?.name}
              </p>

              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {name}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                {description}
              </p>
            </div>

            <div className="flex items-end gap-4">
              <h2 className="text-4xl font-bold">
                ${priceOut}
              </h2>

              <span className="mb-1 rounded-full bg-red-500/10 px-3 py-1 text-sm font-semibold text-red-400">
                {discount}% OFF
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Stock</p>
                <p className="mt-1 text-xl font-semibold">
                  {stockQuantity}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Status</p>
                <p
                  className={`mt-1 text-xl font-semibold ${
                    availability ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {availability ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <h3 className="mb-5 text-xl font-bold">
                Specifications
              </h3>

              <div className="grid gap-4 text-sm md:grid-cols-2">
                <Spec label="Processor" value={processor} />
                <Spec label="RAM" value={ram} />
                <Spec label="Storage" value={storage} />
                <Spec label="GPU" value={gpu} />
                <Spec label="OS" value={os} />
                <Spec label="Screen" value={screenSize} />
                <Spec label="Battery" value={battery} />
                <Spec label="Category" value={category?.name} />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <h3 className="mb-2 text-xl font-bold">
                Warranty
              </h3>

              <p className="text-sm leading-6 text-gray-400">
                {warranty}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div className="rounded-2xl bg-black/30 p-4">
      <p className="text-xs uppercase tracking-wide text-gray-500">
        {label}
      </p>
      <p className="mt-1 font-medium text-white">
        {value || "N/A"}
      </p>
    </div>
  );
}