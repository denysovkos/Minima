export type AuthState = {
    isAuth: boolean;
    userName?: string;
    error?: string;
  };

export type AuthObj = {
  userName?: string;
  password?: string;
}  