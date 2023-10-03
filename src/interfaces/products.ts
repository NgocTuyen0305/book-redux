export interface IProduct {
  _id?: string | number;
  name: string;
  images: [];
  price: number;
  sold: number;
  author: string;
  rate: number;
  quantityStock: number;
  description: string;
  categoryId: string;
  createdAt?:Date;
}
