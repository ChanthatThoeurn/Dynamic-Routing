export type Product = {
  id: number;
  title: string;
  body: string;
};

export type ProductResponse = {
  posts: Product[];
};