import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom'

//styles
import './Favourites.css'


function Favourites(props) {

  let token = sessionStorage.getItem("token");

  return (
    <>

      {!token && <Navigate to="/" />}
      <h1 className="favourite-page">Favourites section</h1>

      <div className="card-favourites">
        {!props.favourites.length && <div>You have no favourite movies 💔</div>}

        {props.favourites.map((movie, index) => {
          return (
            <div className="container-info" key={index}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.imgURL}`}
                  className="card-img"
                  alt="..."
                />
                <button
                  onClick={props.addOrRemoveFavs}
                  data-movie-id={movie.id}
                  className="favourite"
                >
                  🖤
                </button>
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    {movie.overview.substring(0, 100)}
                  </p>
                  <Link
                    to={`/detail?movieID=${movie.id}`}
                    className="btn"
                  >
                    Get detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Favourites;
