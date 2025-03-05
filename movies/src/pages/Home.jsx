import MovieCards from "../components/MovieCards";
import copenImage from "../assets/copen.webp";
import { useState,useEffect } from "react";
import {searchMovies,getPopularMovies} from "../services/api.js";
import "../css/Home.css"


function Home(){
const [searchQuery,setSearchQuery]=useState("");
const [movies,setMovies]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(null);
    useEffect(()=>{
        const loadPopularMovies=async () =>{
            try{
            const popularMovies=await getPopularMovies();
            setMovies(popularMovies);
            }catch(e){
                console.log(err);
                setError("Failed to load movies");
            }
            finally{
                setLoading(false);
            }
        };
        loadPopularMovies();
        
        
    },[]);
    const handleInput = async (e)=>{
        e.preventDefault();
        if(!searchQuery.trim()) return;
        setLoading(true); 
        try{
            const searchResult=await searchMovies(searchQuery);
            setMovies(searchResult);
            setError(null);

        }catch(err){
            console.log(err);
            setError("Failed to search movies...");

        }finally{
            setLoading(false);
        }
        }
    return(
        <div className="home">
            
            <div className="search">
                <form className="search-form" onSubmit={handleInput}>
                    <input type="text" className="search-input" placeholder="SEARCH" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
            <div className="movies-grid">
                {movies.map((movie) =>(
                <MovieCards movie={movie} key={movie.id}/>))}
            </div>
        </div>
        
        
    )

}
export default Home;