import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom'

let token = sessionStorage.getItem("token");

function Favourites(props) {
  return (
    <>

      {!token && <Navigate to="/" />}
      <div className="row m-1">
        <h1>Favourites section</h1>
        {!props.favourites.length && <div>You have no favourite movies 💔</div>}

        {props.favourites.map((movie, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card my-5">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.imgURL}`}
                  className="card-img-top"
                  alt="..."
                />
                <button
                  onClick={props.addOrRemoveFavs}
                  data-movie-id={movie.id}
                  className="btn-favourite"
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
                    className="btn btn-primary"
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
