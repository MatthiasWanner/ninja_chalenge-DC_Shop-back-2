export interface IUser {
  idUser: number;
  lastname: string;
  firstname: string;
  birthday: Date;
  phone: string;
  email: string;
  password: string;
  address: string;
  zipCode: string;
  city: string;
  role: string;
  bio?: string;
}

export interface IOrganization {
  idOrganization: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  zipCode: string;
  city: string;
  idUser: number;
  siret: string;
}

export interface IDraws {
  idDraw: number;
  name: string;
  urlDraw: string;
  idUser: number;
  idOrganization?: number;
  idTheme: number;
}

export interface IThemes {
  idTheme: number;
  name: string;
}
