import {
  observable, action, flow,
} from 'mobx';

import api from '../../../services/api';


export default class AlbumStore {
      @observable album = null;

      constructor({ authStore }) {
        this.authStore = authStore;
      }

      @action reset = () => {
        this.album = null;
      }

      loadAlbum = flow(function* loadAlbum({ id }) {
        if (id) {
          try {
            const { accessToken } = this.authStore;
            this.album = this.albumMapper(yield api(accessToken, `/albums/${id}`));
          } catch (error) {
            console.log(error);
          }
        }
      })

      albumMapper = (spotifyalbum) => {
        const {
          id, name, images, artists: artistList, genres: genreList, tracks: trackList,
        } = spotifyalbum;

        const artists = artistList.map(artist => artist.name).join(', ');
        const genres = genreList.map(item => item).join(', ');
        const imageUrl = images.lenght !== 0 ? images[0].url : null;
        const tracks = trackList.items.map(track => ({
          id: track.id,
          name: track.name,
          trackNumber: track.track_number,
        }));

        return {
          id,
          name,
          artists,
          genres,
          imageUrl,
          tracks,
        };
      }
}
