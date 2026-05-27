"use client";

import Image from "next/image";
import { ProductDetail } from "@/src/lib/product/productDetail";

interface ProductDetailModalComponentProps {
  product: ProductDetail;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModalComponent({
  product,
  isOpen,
  onClose,
}: ProductDetailModalComponentProps) {
  if (!isOpen) return null;

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
    brand,
  } = product;

  const {
    processor,
    ram,
    storage,
    gpu,
  } = computerSpec || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      
      
      <div className="relative w-full max-w-3xl rounded-[1.8rem] border border-white/10 bg-zinc-950 p-5 text-white shadow-2xl">
        
       
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition hover:bg-white hover:text-black"
        >
        
        </button>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          
        
          <div>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-black/30">
              <Image
                src={thumbnail}
                alt={name}
                fill
                className="object-contain p-4"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {color?.map((item) => (
                <div
                  key={item.color}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
                >
                  {item.color}
                </div>
              ))}
            </div>
          </div>

         
          <div className="flex flex-col justify-between">
            
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-400">
                {brand?.name}
              </p>

              <h1 className="mt-2 text-3xl font-bold leading-tight">
                {name}
              </h1>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                {description}
              </p>

             
              <div className="mt-5 flex items-center gap-3">
                <h2 className="text-3xl font-bold">
                  ${priceOut}
                </h2>

                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                  {discount}% OFF
                </span>
              </div>

             
              <div className="mt-5 flex items-center gap-3">
                <div className="rounded-2xl bg-white/5 px-4 py-3">
                  <p className="text-xs text-gray-400">
                    Stock
                  </p>

                  <p className="text-lg font-semibold">
                    {stockQuantity}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 px-4 py-3">
                  <p className="text-xs text-gray-400">
                    Status
                  </p>

                  <p
                    className={`text-lg font-semibold ${
                      availability
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {availability
                      ? "In Stock"
                      : "Out Of Stock"}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <MiniSpec
                  label="Processor"
                  value={processor}
                />

                <MiniSpec
                  label="RAM"
                  value={ram}
                />

                <MiniSpec
                  label="Storage"
                  value={storage}
                />

                <MiniSpec
                  label="GPU"
                  value={gpu}
                />
              </div>
            </div>

           
            <div className="mt-5 rounded-2xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Warranty
              </p>

              <p className="mt-2 text-sm text-gray-300">
                {warranty}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniSpec({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-3">
      <p className="text-[11px] uppercase tracking-wide text-gray-500">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium">
        {value || "N/A"}
      </p>
    </div>
  );
}