
import { useEffect, useState } from "react";
import { blogType } from "../lib/blog/blog-type";
import Image from "next/image";
import { ProductType } from "../lib/product/product";

// export default function BlogComponents(
    
    // using props instead of destructuring for better readability and maintainability
    // props: blogType


    // using destructuring for better readability and maintainability
    // {name, position, profile}: blogType

// ) {
    // return (
    //     <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80 p-5 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-500/20">  
    //   <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    //   <div className="relative flex justify-center">
    //     <img
    //       src={props?.profile}
    //       alt={props?.position}
    //       className="h-32 w-32 rounded-full object-cover ring-4 ring-orange-500/40 transition-transform duration-300 group-hover:scale-105"
    //     />
    //   </div>
    //   <div className="relative mt-5 text-center">
    //     <h2 className="text-xl font-bold tracking-wide text-white">
    //       {props?.name}
    //     </h2>

    //     <p className="mt-2 text-sm font-medium uppercase tracking-[3px] text-orange-400">
    //       {props?.position}
    //     </p>
    //   </div>

    //   <div className="mt-5 h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-40" />
    // </div>
        

  //  <div className="group rounded-3xl border border-white/10 bg-neutral-900/70 p-6 shadow-xl backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:shadow-orange-500/20">
      
  //     {/* Image */}
  //     <div className="flex justify-center">
  //       <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-orange-500/30">
  //         <img
  //           src={profile}
  //           alt={name}
  //           fill
  //           className="object-cover"
  //         />
  //       </div>
  //     </div>

  //     {/* Content */}
  //     <div className="mt-5 text-center">
  //       <h1 className="text-2xl font-bold text-white">
  //         {name}
  //       </h1>

  //       <p className="mt-2 text-sm font-medium tracking-wide text-orange-400">
  //         {position}
  //       </p>
  //     </div>
  //   </div>
    
  //   );
  //   }
  export default function BlogComponents({
  title,
  image,
  description,
  price,
}: blogType) {
  // cart amount
  const [cart, setCart] = useState(0);

  // increase
  const handleIncrease = () => {
    setCart(cart + 1);
  };

  // decrease
  const handleDecrease = () => {
    if (cart > 0) {
      setCart(cart - 1);
    }
  };
  
  return (
     <div className="rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-xl">

      {/* Cart */}
      <div className="mb-3 text-lg font-bold text-red-600">
        Cart: {cart}
      </div>

      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h2 className="line-clamp-1 text-lg font-bold">
          {title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-5 flex items-center justify-between">

          <div className="flex gap-2">
            <button
              onClick={handleIncrease}
              className="rounded-lg bg-green-500 px-4 py-2 text-white"
            >
              +
            </button>

            <button
              onClick={handleDecrease}
              className="rounded-lg bg-red-500 px-4 py-2 text-white"
            >
              -
            </button>
          </div>

          <span className="font-bold text-red-500">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
}