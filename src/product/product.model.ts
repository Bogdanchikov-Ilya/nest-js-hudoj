export class ProductModel {
  image: string;
  title: string;
  price: Number;
  calculatedRating: Number;
  description: string;
  categories: string[];
  characteristics: {
    [key: string]: string;
  }
}
