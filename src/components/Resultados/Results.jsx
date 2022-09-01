import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
//Alertas
import sweetAl from '@sweetalert/with-react'

function Results() {

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const [ movieResults, setMovieResults ] = useState([]);

    useEffect (() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=ac8569537937d0f880026f4f7ef9b798&language=en-US&query=${keyword}`
        axios.get(endPoint)
        .then(r => {
            const movieArray = r.data.results;

            if (movieArray.length === 0){
                sweetAl(
                    <h4>Your search has no results</h4>
                )
            }
            setMovieResults(movieArray);
        })
        .catch(error => console.error())

    }, [keyword]);

  return (
    <div className="row m-1">
      {
        movieResults.map((movie, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card mt-5">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>                    
                    <Link to={`/detail?movieID=${movie.id}`} className="btn btn-primary">Get detail</Link>
                </div>
              </div>
            </div>
          )
        })
      }

      
      
    </div>
  )
}

export default Results