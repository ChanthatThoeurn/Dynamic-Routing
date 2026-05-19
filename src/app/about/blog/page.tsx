// import BlogComponents from "@/src/components/BlogComponents";
"use client";
import BlogComponents from "@/src/components/BlogComponents";
import { ProductType } from "@/src/lib/product/product";
import { useEffect, useState } from "react";

// export default function Blog() {
//     const blogData = [
//         {
//             name: "John Doe",
//             position: "Software Engineer",
//             profile:"https://imgs.search.brave.com/IqYzy4ge1sil1ZFpQGi4hp7le0Nw6lRAOF_b-aSEkNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/MDk3LzkyOC9zbWFs/bC9zbWlsaW5nLXlv/dW5nLW1hbi1pbi1y/ZWQtaG9vZGllLWls/bHVzdHJhdGlvbi1m/b3ItYXZhdGFycy1v/ci1zb2NpYWwtbWVk/aWEtcHJvZmlsZXMt/ZnJlZS12ZWN0b3Iu/anBn"
//         },
//         {
//             name: "Chan That",
//             position: "Software Engineer",
//             profile:"https://imgs.search.brave.com/v-CJ2teZFL0RHJ8ujpx8ovhYa-1Ysg5lWhmzicIgpTQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjgv/MDcyLzE0MS9zbWFs/bC9mbGF0LWF2YXRh/ci1vZi15b3VuZy1t/YW4td2l0aC1zaG9y/dC1icm93bi1oYWly/LWFuZC1jYXN1YWwt/b3V0Zml0LWlkZWFs/LWZvci1wcm9maWxl/LWljb25zLXdlYi1h/dmF0YXJzLW1hbGUt/Y2hhcmFjdGVycy1h/cHAtZGVzaWduLWFu/ZC1icmFuZGluZy1p/bGx1c3RyYXRpb25z/LWZyZWUtdmVjdG9y/LmpwZw"
//         }
//     ]
//     return (
//     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//       {blogData?.map(({profile, name, position}, index) => (
//         <BlogComponents
//           key={index}
//           name={name}
//           position={position}
//           profile={profile}
//         />
//       ))}
//     </div>
//   );
// }   

export default function ProductPage() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <section className="min-h-screen bg-neutral-100 px-6 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">
         <span className="text-orange-500">Products</span>
        </h1>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        
        {products.map((product) => (
          <BlogComponents
            key={product.id}
            title={product.title}
            image={product.thumbnail}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}