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
  displayName: string;
  email: string;
  password: string;
  address?: string;
  city?: string;
  phoneNumber?: string;
}
