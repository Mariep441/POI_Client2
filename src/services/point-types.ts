export interface Category {
  costalZone: string;
  _id: string;
}

export interface Point {
  name: string;
  description: string;
  category?: Category;
  coordinates: Coordinates;
  _id: string;
}


export interface Coordinates {
  lat: number;
  long: number;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: string;
}
