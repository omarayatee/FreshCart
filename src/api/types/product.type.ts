export interface ProductType {
  reviews: { rating: number; }[];
  sold: number;
  image: string[];
  subcategory: [[object]];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  images: string[];
  quantity: number;
  price: number;
  imageCover: string;
  category: CategoryType;
  brand: BrandType;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  availableColors?: string[];
  priceAfterDiscount?: number;
}

export interface CategoryType {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface BrandType {
  _id: string;
  name: string;
  slug: string;
  image: string;
   __v: number;
}

export interface AllCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
export interface QuantityProps {
  maxQty: number;
  price: number;
}
export interface User {
  _id: string;
  name: string;
}

export interface Review {
  _id: string;
  rating: number;
  review: string;
  product: string;
  user: User;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}