import { ProductType } from "@/api/types/product.type";
import AddBtn from "@/app/_Components/AddBtn/AddBtn";
import { Button } from "@/components/ui/button";
import React from "react";
import { CiStar } from "react-icons/ci";

// https://ecommerce.routemisr.com/api/v1/products/6428de2adc1175abc65ca05b

export default async function ProductDetails(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  async function getSingleProduct(): Promise<ProductType | undefined> {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      );
      const data = await res.json();

      return data.data;
    } catch (err) {
      return undefined;
    }
  }

  const myProduct = await getSingleProduct();

  return (
    <>
      <div className="w-[80%] mx-auto my-4 py-5 flex">
        <div className="w-1/4 p-4">
          <img
            src={myProduct?.imageCover}
            alt={myProduct?.title}
            className="w-full"
          />
          <div className="flex">
            {myProduct?.images.map((src) => <div key={src} className="w-1/3"><img src={src} alt={src} /></div>)}
          </div>
        </div>
        <div className="w-3/4 p-4">
          <h2 className="text-4xl font-bold">{myProduct?.title}</h2>
          <h3 className="my-5 font-bold">{myProduct?.description}</h3>
          <div className="flex gap-2 items-center">
            <span>Price :</span>
            <span className="text-[#16A34A] font-bold text-lg">
              {myProduct?.priceAfterDiscount}
            </span>
            <span className="text-sm text-slate-600 line-through">
              {myProduct?.price}
            </span>
          </div>

          <div className="rate flex items-center gap-2">
            <CiStar className="text-yellow-500" />
            <CiStar className="text-yellow-500" />
            {myProduct?.ratingsAverage}
            {`(${myProduct?.ratingsQuantity})`} reviews
          </div>

          <AddBtn id={id} classes="w-full rounded-sm font-bold text-sm mt-4 bg-[#16A34A] p-4 my-4 text-white cursor-pointer" word="Add To Card"/>

        </div>
      </div>
    </>
  );
}
