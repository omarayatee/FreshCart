"use client";
import { addToCart } from "@/actions/cart.actions";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";
import React, { useContext } from "react";
import { toast } from 'sonner';

export default function AddBtn({
  classes,
  word,
  id,
}: {
  classes: string;
  word: string;
  id: string;
}) {


  const {numOfCartItems, setnumOfCartItems} = useContext(CartContext)


  async function AddProduct() {
   const res = await addToCart(id);
   if(res.status === "success"){
    toast.success(res.message, {position : "top-center", duration : 2000})
    setnumOfCartItems(numOfCartItems + 1)
   }
   else{
    toast.error(res.message, {position : "top-center", duration : 2000})
   }
   
   
  }

  return (
    <>
      <Button
        onClick={(e) => {
          e.preventDefault();
          AddProduct();
        }}
        className={classes}
      >
        {" "}
        {word}{" "}
      </Button>
    </>
  );
}
