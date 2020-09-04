export interface Product {
  _id?: string;
  id: string;
  name: string;
  price: number;
  description: string;
  color: string[];
  size: string[] | string;
  images: string[];
  category: string;
  theme?: string;
  count?: number;
}

export interface User {
  _id?: string;
  displayName: string;
  email: string;
  password: string;
  address?: string;
  city?: string;
  phoneNumber?: string;
}

export interface Comments {
  rating: number;
  comment: string;
  users: object;
  products: string;
}
