"use server";

import { getMyToken } from "@/utilities";

export async function addToCart(productId: string) {
  try {
    const token = await getMyToken();

    if (!token) {
      throw new Error("Please Login First");
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
      method: "POST",
      headers: {
        token: token as string,
        "content-type": "application/json",
      },
      body: JSON.stringify({ productId: productId }),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}

export async function getLoggedUserCart() {
  const token = await getMyToken();

  if (!token) {
    throw new Error("Please Login First");
  }

  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "Get",
    headers: {
      token: token as string,
      "content-type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

export async function UpdateProductQuantity(productId: string, count: number) {
  const token = await getMyToken();

  if (!token) {
    throw new Error("Please Login First");
  }

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
    {
      method: "PUT",
      headers: {
        token: token as string,
        "content-type": "application/json",
      },
      body: JSON.stringify({ count: count }),
    },
  );

  const data = await res.json();
  return data;
}

export async function RemoveProduct(productId: string) {
  const token = await getMyToken();

  if (!token) {
    throw new Error("Please Login First");
  }

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
    {
      method: "DELETE",
      headers: {
        token: token as string,
        "content-type": "application/json",
      },
    },
  );

  const data = await res.json();
  return data;
}

export async function RemoveAllProductsFromCart() {
  const token = await getMyToken();

  if (!token) {
    throw new Error("Please Login First");
  }

  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "DELETE",
    headers: {
      token: token as string,
      "content-type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}
