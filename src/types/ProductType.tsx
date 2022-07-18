export type PhoneType = {
  id?: number;
  name: string;
  img: string;
  short_description: string;
  long_description: string;
  originalPrice: number;
  saleOffPrice?: number;
  categorId: number;
};
