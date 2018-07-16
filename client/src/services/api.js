const API_URL = 'https://api.spotify.com/v1';

export default function (token, path, method = 'GET') {
  return fetch(`${API_URL}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(response => response.json())
    .then(responseJson => responseJson);
}
