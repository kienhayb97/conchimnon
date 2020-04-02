import {IBookPicture} from './IBookPicture';

export interface IBook {
  id: number;
  name: string;
  bookPictures: IBookPicture[];
  price: number;
  dateCreate: Date;
  description: string;
  amount: number;
  publishing: any;
  category: any;
  languages: any[];
}
