export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
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
