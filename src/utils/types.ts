export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export interface Response<T> {
  data: T[] | [];
  error: {
    state: boolean;
    type: string | undefined;
    status: number | undefined;
    message: string | undefined;
  };
}
