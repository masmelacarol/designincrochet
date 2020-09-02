export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  color: string[];
  size: string[];
  images: string[];
  category: string;
  theme?: string;
}

export interface User {
  displayName: string;
  email: string;
  password: string;
}
