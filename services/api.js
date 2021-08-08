import axios from 'axios';

const KEY = '16728948-c39c5dcc25e25d8fd8d200637';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getKittens = (perPage) =>
  axios
    .get(
      `?key=${KEY}&q=kittens&category=animals&page=1&image_type=photo&per_page=${perPage}`
    )
    .then((data) => data);
