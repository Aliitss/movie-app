import axios from 'axios';
import React, { useEffect,  useState } from 'react';

import { Link, Navigate } from 'react-router-dom';

import sweetAl from '@sweetalert/with-react' //alertas agradables a la vista. Estas dependencias se llaman, SWEET ALERT y SWEET ALERT WITH REACT son necesarias ambas para poder trabajar con react


function Listado(props) {

  
  let token = sessionStorage.getItem('token');

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=ac8569537937d0f880026f4f7ef9b798&language=en-US&page=1';
    axios.get(endPoint)
    .then( resp => {
      const apiData = resp.data;
      setMovieList(apiData.results)
    })
    .catch(error => {
      sweetAl(
        <h2>Sorry we broke something, try again later 😥</h2>
      )
    })
  }, [setMovieList]);


  return (
    <>
    {!token && <Navigate to='/' />}


    <div className="row m-1">
      {
        movieList.map((movie, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card mt-5">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."/>
                <button onClick={props.addOrRemoveFavs} data-movie-id={movie.id} className='btn-favourite'>🖤</button>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview.substring(0, 100)}...</p>
                    <Link to={`/detail?movieID=${movie.id}`} className="btn btn-primary">Get detail</Link>
                </div>
              </div>
            </div>
          )
        })
      }

      
      
    </div>
    </>
  )
}

export default Listado