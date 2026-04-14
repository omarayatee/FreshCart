
import { Brand, Subcategory } from "../types/cartContext";
import { AllCategory, CategoryType, ProductType } from "../types/product.type";

 export async function getAllProducts(): Promise<ProductType[] | undefined> {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products`,
      );
      const data = await res.json();

      return data.data;
    } catch (err) {
      return undefined;
    }
  }



   export async function getAllCategories(): Promise<CategoryType[] | undefined> {
      try {
        const res = await fetch(
          `https://ecommerce.routemisr.com/api/v1/categories`,
        );
        const data = await res.json();
        return data.data;
      } catch (err) {
        return undefined;
      }
    }


    export async function getAllBrands(): Promise<Brand[] | undefined> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    return undefined;
  }
}

export async function getSingleCategory(id: string): Promise<AllCategory | undefined> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
    const data = await res.json();
    return data.data;
  } catch {
    return undefined;
  }
}


export async function getSingleBrands(id: string): Promise<ProductType[]> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?brand=${id}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw new Error('Failed to fetch product');
  }
}
export async function getAllsubcategories(): Promise<Subcategory[] | undefined> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories`);
    const data = await res.json();
    // console.log('data subcategories',data.data);
    return data.data;
  } catch (error) {
    return undefined;
  }
}
export async function getSingleSubcategories(id: string): Promise<ProductType[]> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?subcategory=${id}`,{ cache: 'no-store' });
    const data = await res.json();
    return data.data;
    
  } catch {
    return [];
  }
}
export async function getProductsByCategory(id: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?category=${id}`
  );
  const data = await res.json();
  return data.data;
}


export async function getSingleProduct(id: string): Promise<ProductType[]> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw new Error('Failed to fetch product');
  }
}

 