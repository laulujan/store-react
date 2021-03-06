declare global {
    export interface Window {
        nav:any;
    }
}

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
      item_id: number,
      name: string,
      price: number,
      imageUrl: string,
      total: number,
      quantity: number, 
      col_id: number,
      title: string,
};

export interface Category {
    id: number;
    name: string;
    filename: string;
    alt: string;
};
