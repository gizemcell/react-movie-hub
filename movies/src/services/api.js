const API_KEY="136094f88ad989a94b6b3d16b0f387ce";
const BASE_URL="https://api.themoviedb.org/3";

export const getPopularMovies= async ()=>{
    const response= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data= await response.json();
    return data.results;
}

export const searchMovies= async (query)=>{
    const response=await fetch(`${BASE_URL}/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data=await response.json();
    return data.results;

}