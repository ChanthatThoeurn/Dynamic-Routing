import ProductFullDetailPageComponent from "@/src/components/productComponent/product_full";
import { ProductDetail } from "@/src/lib/product/productDetail";


interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getProduct(
  id: string
): Promise<ProductDetail> {
  const res = await fetch(
    `http://localhost:3000/api/product/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw Error("Failed to fetch product");
  }

  const json = await res.json();

  return json.data;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <ProductFullDetailPageComponent product={product} />
  );
}