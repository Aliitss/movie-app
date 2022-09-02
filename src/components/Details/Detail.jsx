import React, { useEffect } from "react";
import { useState } from "react";

//Redirects people and is a substitute from Redirect
import { Navigate } from "react-router-dom";

//Brings info from API
import axios from "axios";

// cute Alerts
import sweetAl from "@sweetalert/with-react";

function Detail() {
  let token = sessionStorage.getItem("token"); //el sessionStorage permite proteger las rutas, además de eso permite eliminar el token una vez se cierre la sesión del navegador.

  const [movieDetail, setMovieDetail] = useState(null);

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=ac8569537937d0f880026f4f7ef9b798&language=en-US`;
    axios
      .get(endPoint)
      .then((res) => {
        const movieData = res.data;
        setMovieDetail(movieData);
      })
      .catch((error) => {
        sweetAl(<h2>We broke something, come back later 😥</h2>);
      });
  }, [movieID]);

  console.log(movieDetail);

  return (
    <>
      {!token && <Navigate to="/" />}
      {!movieDetail && (
        <h1>Loading... 💥</h1>
      )}
      {movieDetail && (
        <>
          <h1>{movieDetail.title}</h1>
          <div className="row">
            <div className="col-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
                alt="..."
                className="img-fluid mb-4 mt-5"
              />
            </div>
            <div className="col-8">
              <h5>Release date: {movieDetail.release_date}</h5>
              <h5>Review:</h5>
              <p>{movieDetail.overview}</p>
              <h5>Genres:</h5>
              <ul>
                {movieDetail.genres.map((oneMovie) => (
                  <li key={oneMovie.id}>{oneMovie.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
