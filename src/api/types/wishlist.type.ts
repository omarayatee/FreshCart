import { ProductType } from './product.type';

export interface ForWishlist {
  status: string;
  count: number;
  data: ProductType[];
}