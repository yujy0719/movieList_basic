import React , {useState} from "react";
import MovieList from "../Component/MovieList"
import MovieInput from "../Component/MovieInput"

const Movie = () => {
    const [movies ,setMovie] = useState([
        // {id:1 , title : '해리포터 비밀의 방1' , year : 2012 },
        // {id:2 , title : '해리포터 비밀의 방2' , year : 2013 },
        // {id:3 , title : '해리포터 비밀의 방3' , year : 2014 }
    ])
    
    function movieData (data) {
        let tmpId = movies.length !== 0 ?  movies[movies.length-1].id : 0
        setMovie([
            ...movies,
            {id: tmpId+1, title:data.title, year:data.year}
        ])
        // }
    }
    function deleteMovieInfo (id) {
        const idx = movies.findIndex(movie => movie.id === id); 
        if (idx > -1) setMovie(movies.filter((value,index) => index !== idx));
    }
    
    const movieList = movies.length ? movies.map(movie=>{
        return(
        <MovieList 
            movie={movie} 
            key={movie.id}
            deleteMovieInfo={deleteMovieInfo}
        />
        )
    }) : "추가된 영화정보가 없습니다."
    
    return(
        <div>
            <h1>Movie List</h1>
            <MovieInput movieData={movieData} /> 
            {movieList}
        </div>
    )
}
export default Movie;