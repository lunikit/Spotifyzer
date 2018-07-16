import AuthStore from './AuthStore';
import { SearchStore } from '../modules/search';


class RootStore {
  constructor() {
    this.authStore = new AuthStore(this);
    this.searchStore = new SearchStore(this);
  }
}

const rootStore = new RootStore();
export default rootStore;
