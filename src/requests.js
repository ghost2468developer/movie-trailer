const API_KEY = "573f15303b4c2ff34b2491b6cd89c012";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals : `/discover/movie?api_key=${API_KEY}`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;