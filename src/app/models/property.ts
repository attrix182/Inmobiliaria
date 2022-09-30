export interface Property {
  id: string;
  price: number;
  squareFeet: number;
  squareFeetCover: number;
  baths: number;
  bedrooms: number;
  parkings: number;
  yearBuilt?: number;
  adress: Adress;
  offerType: Type;
  propertyType: PropertyType;
  props: Prop[];
  images: string[];
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
  country: string;
  province: string;
  locality: string;
  street: string;
  zipCode: string;
}

export interface Prop {
  key: string;
  value: string;
}
