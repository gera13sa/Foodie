import { UserInfo } from './users-interface';

export interface Recipe {
  id: number;
  title: string;
  body: string;
  tags: string;
  user: UserInfo;
  image: string;
  timeCooking: number;
  foodValue: FoodValue;
  comments: Comment[];
  additionalInformation: AdditionalInformation;
  favorite: boolean;
}

export interface AdditionalInformation {
  ingredients: string[];
  details: Detail[];
}

export interface Detail {
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  body: string;
  user: CommentUser;
  dateCreated: string;
}

export interface CommentUser {
  id: number;
  username: string;
}

export interface FoodValue {
  calories: number;
  belki: number;
  fats: number;
  carbohydrates: number;
}
