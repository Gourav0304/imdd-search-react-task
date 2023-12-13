/** @format */

export interface UserAPIData {
  userId: number;
  name: string;
  subtext: string;
  description: string;
  image: string;
}
export interface HomeProps {
  userData: UserAPIData[];
}
export interface CardProps {
  userData: UserAPIData[];
  handleOpen: (item: number) => void;
}

export interface UserDetails {
  item: UserAPIData;
}
