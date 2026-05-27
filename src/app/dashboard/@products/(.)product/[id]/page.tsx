import ProductDetailModalClient from "@/src/components/productComponent/product_detail_Cliend";
import { ProductDetail } from "@/src/lib/product/productDetail";

interface ProductDetailModalPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getProduct(id: string): Promise<ProductDetail> {
  const res = await fetch(`http://localhost:3000/api/product/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const json = await res.json();
  return json.data;
}

export default async function ProductDetailModalPage({
  params,
}: ProductDetailModalPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
   <ProductDetailModalClient  product={product}/>
  );
}