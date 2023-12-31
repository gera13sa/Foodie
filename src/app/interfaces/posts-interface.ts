import { UserLogInfo } from './users-interface';

export interface Posts {
  id: number;
  title: string;
  tags: string;
  user: UserLogInfo;
  image: string;
  body: string;
  timeCooking: number;
  favorite: boolean;
}
