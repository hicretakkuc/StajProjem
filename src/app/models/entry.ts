import { Category } from './category';
import { User } from './user';

export class Entry {
  id!: number;
  title!: string;
  contentHata!: string;
  contentCozum!: string;
  date!: Date;
  tag!: string;
  category!: Category;
  kullanıcı!:User;
}

//kullanıcı servisini ve classını  oluşturduktan sonra onu da ekle
