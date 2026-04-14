'use server';

import { getMyToken } from "@/utilities";

export async function AddToWishlist(productId: string) {
  const token = await getMyToken();
  if (!token) {
    throw new Error('Please login first');
  }
  const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
    method: 'POST',
    headers: { token: token as string, 'content-type': 'application/json' },
    body: JSON.stringify({ productId: productId }),
  });
  const data = await res.json();
  return data;
}
export async function getLoggedUserWishlist() {
  const token = await getMyToken();
  const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
    method: 'GET',
    headers: { token: token as string, 'content-type': 'application/json' },
  });
  const data = await res.json();
  return data;
}
export async function RemoveFromWishlist(productId: string) {
  const token = await getMyToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
    method: 'DELETE',
    headers: { token: token as string, 'content-type': 'application/json' },
  });
  const data = await res.json();
  return data;
}