import {IBookPicture} from './IBookPicture';

export interface IBook {
  id: number;
  name: string;
  bookPictures: IBookPicture[];
  price: number;
  dateCreate: Date;
  description: string;
  amount: number;
  authors: any[];
  publishing: any;
  category: any;
  languages: any[];
}
