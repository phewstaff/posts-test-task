export interface IUser {
  id: number;
  username: string;
  email: string;
  phone: string;
}

export interface IComment {
  id: number;
  postId: number;
  body: string;
  email: string;
  name: string;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}
