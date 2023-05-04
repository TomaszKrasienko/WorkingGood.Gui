export class UserDataStorage{
  token: string;
  refreshToken: string;
  emailAddress: string;
  constructor(token: string, refreshToken: string, emailAddress: string) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.emailAddress = emailAddress;
  }
}
