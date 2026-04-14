'use server';
import { cheackoutSchemaType } from '@/schemas/checkout.schema';
import { getMyToken } from '@/utilities';
export async function onlinPayment(
  productId: string,
  url: string = process.env.NEXTAUTH_URL!,
  formValus: cheackoutSchemaType,
) {
  const token = await getMyToken();
  if (!token) {
    throw new Error('Please login first');
  }
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${productId}?url=${url}`,
    {
      method: 'POST',
      headers : { token: token as string, 'content-type': 'application/json' } ,
      body: JSON.stringify({ shippingAddress: formValus }),
    },
  );
  const data = await res.json();
  return data;
}
export async function cashOrder(productId: string, formValus: cheackoutSchemaType) {
  const token = await getMyToken();
  if (!token) {
    throw new Error('Please login first');
  }
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${productId}`, {
    method: 'POST',
    headers: { token: token as string, 'content-type': 'application/json' },
    body: JSON.stringify({ shippingAddress: formValus }),
  });
  const data = await res.json();
  return data;
}