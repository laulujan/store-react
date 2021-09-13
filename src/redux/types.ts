export interface UserCredentials {
    [index: string]: any;
    displayName: string,
    email: string,
    password: string,
};

export interface UserErrors {
  [index: string]: boolean;
};