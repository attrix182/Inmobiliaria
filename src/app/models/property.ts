export interface Property {
  id: string;
  price: number;
  currency: string;
  squareFeet: number;
  squareFeetCover: number;
  baths: number;
  bedrooms: number;
  parkings: number;
  yearBuilt?: number;
  adress: Adress;
  offerType: string;
  propertyType: string;
  props: Prop[];
  images: string[];
  image?: string;
}

export enum PropertyType {
  casa,
  departamento,
  oficina,
  terreno
}

export enum Type {
  compra,
  alquiler
}

export interface Adress {
  province: string;
  locality: string;
  street: string;
  zipCode: string;
}

export interface Prop {
  key: string;
  value: any;
}
