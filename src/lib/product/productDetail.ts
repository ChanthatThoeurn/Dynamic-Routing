export interface ProductDetail {
  uuid: string;
  name: string;
  description: string;
  thumbnail: string;
  images: string[];
  priceOut: number;
  discount: number;
  stockQuantity: number;
  availability: boolean;
  warranty: string;

  computerSpec: {
    processor: string;
    ram: string;
    storage: string;
    gpu: string;
    os: string;
    screenSize: string;
    battery: string;
  };

  color: {
    color: string;
    images: string[];
  }[];

  category: {
    uuid: string;
    name: string;
  };

  brand: {
    uuid: string;
    name: string;
    brandLogo: string;
  };
}