//PATH TO GET IMAGES -> https://image.tmdb.org/t/p/w500/RETURNEDPATH.JPG
//Key
const api_key = "b337d1ccb7b812ffd7624e575a0dc7ff";
//Base Url
const base_url = "https://api.themoviedb.org/3/";

// START OF MOVIE CALLS
//Popular Movies
export const popular_moviesURL = () =>
  `${base_url}movie/popular?api_key=${api_key}&page=1`;
//Top Rated Movies
export const top_rated_moviesURL = () =>
  `${base_url}movie/top_rated?api_key=${api_key}`;
//Get Similar Movies
export const similar_moviesURL = (movie_id) =>
  `${base_url}movie/${movie_id}/similar?api_key=${api_key}`;
//Get Recommended Movies
export const recommended_moviesURL = (movie_id) =>
  `${base_url}movie/${movie_id}/recommendations?api_key=${api_key}`;
//Get Upcoming Movies
export const upcoming_moviesURL = () =>
  `${base_url}movie/upcoming?api_key=${api_key}`;
//Now Playing Movies
export const now_playing_moviesURL = () =>
  `${base_url}movie/now_playing?api_key=${api_key}`;
//Get Movie Details
export const movie_detailsURL = (movie_id) =>
  `${base_url}movie/${movie_id}?api_key=${api_key}`;
//END OF MOVIE CALLS

//START OF TV SHOW CALLS
//Popular TV shows
export const popular_tvURL = () => `${base_url}tv/popular?api_key=${api_key}`;
//Top rated TV shows
export const top_rated_tvURL = () =>
  `${base_url}tv/top_rated?api_key=${api_key}`;
//Similar TV shows
export const similar_tvURL = (tv_id) =>
  `${base_url}tv/${tv_id}/similar?api_key=${api_key}`;
//Recommended TV shows
export const recommended_tvURL = (tv_id) =>
  `${base_url}tv/${tv_id}/recommendations?api_key=${api_key}`;
//Get Latest TV shows
export const latest_tvURL = () => `${base_url}tv/latest?api_key=${api_key}`;
//Get TV shows airing today
export const airing_today_tvURL = () =>
  `${base_url}tv/airing_today?api_key=${api_key}`;
//Get TV Details
export const tv_detailsURL = (tv_id) =>
  `${base_url}tv/${tv_id}?api_key=${api_key}`;
//END OF TV SHOW CALLS

console.log(popular_moviesURL());
