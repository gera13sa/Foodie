import { User } from './users-interface';

export interface Posts {
  id: number;
  title: string;
  tags: string;
  user: User;
  image: string;
  body: string;
  timeCooking: number;
  favorite: boolean;
}
