import TestStore from './TestStore';
import AuthStore from './AuthStore';


class RootStore {
  constructor() {
    this.testStore = new TestStore(this);
    this.authStore = new AuthStore(this);
  }
}

const rootStore = new RootStore();
export default rootStore;
