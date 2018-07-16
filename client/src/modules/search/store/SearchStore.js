import {
  observable, action, computed, flow,
} from 'mobx';

import api from '../../../services/api';

export default class SearchStore {
    @observable text = '';

    @observable albums = [];

    @observable loading = false;

    @computed get isEmpty() {
      return this.albums.length === 0;
    }

    constructor({ authStore }) {
      this.authStore = authStore;
    }

    @action reset = () => {
      this.text = '';
      this.albums = [];
      this.loading = false;
    }

    wait = milliseconds => new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    })

    changeSearchText = flow(function* changeSearchText({ text }) {
      this.text = text;

      yield this.wait(2000);

      if (this.text === text) {
        yield this.search();
      }
    })

    search = flow(function* search() {
      if (this.text) {
        this.loading = true;

        try {
          const { accessToken } = this.authStore;
          this.albums = this.albumsMapper(yield api(accessToken, `/search?type=album&q=${this.text}`));
        } catch (error) {
          console.log(error);
        }

        this.loading = false;
      }
    })

    albumsMapper = (spotifyalbums) => {
      const { items } = spotifyalbums.albums;

      return items.map((album) => {
        const artists = album.artists.map(artist => artist.name).join(', ');
        const imageUrl = album.images.lenght !== 0 ? album.images[0].url : null;

        return {
          id: album.id,
          name: album.name,
          artists,
          imageUrl,
        };
      });
    }
}
