import {
  observable, action, computed, flow,
} from 'mobx';

import api from '../services/api';

const ACCESS_TOKEN = 'ACCESS_TOKEN';
const REFRESH_TOKEN = 'REFRESH_TOKEN';


export default class AuthStore {
  @observable user = null;

  @observable accessToken = null;

  @observable refreshToken = null;

  @computed get isAuthenticated() {
    return !!this.user;
  }

  @observable isInited = false;

  login = flow(function* login({ accessToken, refreshToken }) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;

    try {
      this.user = this.userMapper(yield api(accessToken, '/me'));
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);
    } catch (error) {
      console.log(error);
    }
  })

  @action logout = () => {
    localStorage.clear();
    this.user = null;
    this.accessToken = null;
    this.refreshToken = null;
  }

  userMapper = (spotifyUser) => {
    const { id, display_name, images } = spotifyUser;
    const imageUrl = images.lenght !== 0 ? images[0].url : null;

    return {
      id,
      name: display_name,
      imageUrl,
    };
  }

  getUser = flow(function* getUser({ accessToken }) {
    const user = yield api(accessToken, '/me');

    this.user = user;
  })

/*
  @flow initApp = function* () {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    // if (accessToken && refreshToken) {
    //
    // }
  }
  */
}
