import React from "react" ; // return을 jsx로 하려면 react 임포트 해줘야한다. 

const MovieList = ({movie,deleteMovieInfo}) => {
    const sendDeleteMovieInfo = () => {
        deleteMovieInfo(movie.id)
    }
    return(
        <div className="movie">
            <div className="movie-title">
                {movie.title} 
                <span className="movie-year">({movie.year})</span>
            </div>  
            <button onClick={sendDeleteMovieInfo}>삭제</button>
        </div>
    );
};
export default MovieList;