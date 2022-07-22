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
  large: string;
  medium: string;
  thumbnail: string;
};

export type Contact = {
  gender: string;
  name: Name;
  email: string;
  location: Location;
  dob: string;
  phone: string;
  picture: Picture;
};
