import axios from 'axios';
const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
const APIkey = process.env.NEXT_PUBLIC_API_KEY;
export { APIkey, movieApi };
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';
export const BASE_IMG_URL_500w = 'https://image.tmdb.org/t/p/w500';

// export function getMovieById(id: string): Promise<Movie> {
//   return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
//     .then((response) => response.json())
// }