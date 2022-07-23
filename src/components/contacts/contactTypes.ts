import * as GlobalTypes from "../../common/globalTypes";

export type Gender = 'male' | 'female'

export type Name = {
  title: string;
  first: string;
  last: string;
};

export type Location = {
  street: string;
  city: string;
  state: string;
  country: string;
};

export type Picture = {
  large?: string;
  medium?: string;
  thumbnail?: string;
};

export type Contact = {
  gender: Gender;
  name: Name;
  email: string;
  location: Location;
  dob: string;
  phone: string;
  picture?: Picture;
};

export type AddContact = {
  status: GlobalTypes.STATUS;
  message: string;
  result: Contact;
};

export type RemoveContact = {
  status: GlobalTypes.STATUS;
  message: string;
  result: Contact;
};
