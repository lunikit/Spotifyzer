import AuthStore from './AuthStore';


class RootStore {
  constructor() {
    this.authStore = new AuthStore(this);
  }
}

const rootStore = new RootStore();
export default rootStore;
