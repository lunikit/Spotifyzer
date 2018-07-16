import AuthStore from './AuthStore';
import { SearchStore } from '../modules/search';
import { AlbumStore } from '../modules/album';


class RootStore {
  constructor() {
    this.authStore = new AuthStore(this);
    this.searchStore = new SearchStore(this);
    this.albumStore = new AlbumStore(this);
  }
}

const rootStore = new RootStore();
export default rootStore;
