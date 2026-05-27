"use client";

import { ProductDetail } from "@/src/lib/product/productDetail";
import { useState } from "react";
import ProductDetailModalComponent from "./product_full_model";



export default function ProductDetailModalClient({
  product,
}: {
  product: ProductDetail;
}) {
  const [open, setOpen] = useState(true);

  return (
    <ProductDetailModalComponent
      product={product}
      isOpen={open}
      onClose={() => setOpen(false)}
    />
  );
}