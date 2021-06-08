import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import Movie from "./Movie/Movie";
dotenv.config();

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`;





function Movies() {
  const [movies, setMovies] = useState([]);
  const [search,setSearch]=useState('');

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(FEATURED_API);
      const resJson = await response.json();
      setMovies(resJson.results);
    };
    fetchApi();
  }, []);
  console.log(movies);

const handleSubmit=(e)=>{
e.preventDefault(); 
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=${search}`;
const fetchSearch = async () => {
   
    const res = await fetch(SEARCH_API);
    const resJ = await res.json();
    setMovies(resJ.results);
  };
  fetchSearch();

}


  return (
      <div>
    
    <div className="searchbox-container">
    <div className='serarch-box'>
    <form onSubmit={handleSubmit}>
    <input className='search' placeholder='Search Movies' type='search' value={search} onChange={ (e)=>{
        setSearch(e.target.value)
        
    }} />
    </form>
    </div>
  </div>

  

    <div className='container'>
      {movies.length>0?
        (movies.map((movie) => {
          return <Movie
           key={movie.id}
           img={movie.poster_path}
           title={movie.title}
           ratings={movie.vote_average}
           overview={movie.overview} />;
        })):
      (
          <div className='error-box'>
              <h1 className='error-text'> No Movies Found</h1>
          </div>
      )
    }

    </div>

    </div>
  );
}

export default Movies;
