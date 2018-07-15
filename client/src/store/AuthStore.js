import { observable, action, computed } from 'mobx';


export default class AuthStore {
  @observable user = null;

  @observable accessToken = null;

  @observable refreshToken = null;

  @computed get isAuthenticated() {
    return !!this.user;
  }

  @action login = ({ accessToken, refreshToken }) => {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}
