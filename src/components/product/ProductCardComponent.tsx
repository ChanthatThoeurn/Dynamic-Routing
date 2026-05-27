import { Product } from "@/src/lib/product/product_Type";


export function ProductCardComponent({id , title , body  }: Product) {
  return (
     
          <article
            key={id}
            className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="mb-3 block text-sm text-neutral-500">
              Product #{id}
            </span>

            <h2 className="mb-3 text-xl font-bold text-neutral-900">
              {title}
            </h2>

            <p className="line-clamp-4 leading-7 text-neutral-600">
              {body}
            </p>
          </article>
   
  );
}