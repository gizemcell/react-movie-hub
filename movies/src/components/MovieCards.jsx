import "../css/MovieCards.css"
import { useMovieContext } from "../contexts/MovieContext";


function MovieCards({movie}){
    const {favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite} = useMovieContext()
    const favorite=isFavorite(movie.id);
    function onFavoriteClick(e){
        e.preventDefault();
        if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }
    
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="poster" alt={movie.title}/>
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                    </button>

                </div>
            </div>
            <div className="movie-info">
                <h4 className="movie-name">{movie.title}</h4>
                <p>{movie.release_date}</p>
            </div>
            
        </div>
    )
    

}
export default MovieCards;