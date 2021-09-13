export interface UserCredentials {
    [index: string]: any;
    displayName: string,
    email: string,
    password: string,
};

export interface UserErrors {
  [index: string]: boolean;
};

export interface Product {
      col_id: number,
      title: string,
      item_id: number,
      name: string,
      price: number,
      imageUrl: string
};