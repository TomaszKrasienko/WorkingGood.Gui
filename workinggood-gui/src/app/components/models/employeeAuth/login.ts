export interface Login{
    email: string;
    password: string;
}
export interface LoginResponse{
    refreshToken: string;
    refreshTokenExpiration: Date;
    token: string;
    tokenExpiration: Date;
}