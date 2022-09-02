import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

/* COMPONENTS */
import Login from "./components/Login/Login.jsx";
import Listado from "./components/Listado/Listado.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Detail from "./components/Details/Detail.jsx";
import Results from "./components/Resultados/Results.jsx";
import Favourites from "./components/Favourites/Favourites.jsx";
import Contact from "./components/Contact/Contact.jsx";

/* STYLES BOOTSTRAP */
import "./css/bootstrap.min.css";
import "./css/app.css";

function App() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favInLocal = localStorage.getItem("favs");

    if (favInLocal !== null) {
      const favArray = JSON.parse(favInLocal);
      setFavourites(favArray);
    }
  }, []);

  const favMovies = localStorage.getItem("favs");

  let moviesInFavs;

  if (favMovies === null) {
    moviesInFavs = [];
  } else {
    moviesInFavs = JSON.parse(favMovies);
  }

  const addOrRemoveFavs = (e) => {
    const btn = e.target;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;

    const movieData = {
      imgURL,
      title,
      overview,
      id: btn.dataset.movieId,
    };
    let moviesInArray = moviesInFavs.find((el) => {
      return el.id === movieData.id;
    });

    if (!moviesInArray) {
      moviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(moviesInFavs));
      setFavourites(moviesInFavs);
      console.log("Movie has been added");
    } else {
      let removedMovies = moviesInFavs.filter((el) => {
        return el.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(removedMovies));
      setFavourites(removedMovies);
      console.log("Movie has been deleted");
    }
  };

  return (
    <>
      <Header favourites={favourites} />
      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            path="/list"
            element={<Listado addOrRemoveFavs={addOrRemoveFavs} />}
          />
          <Route path="/detail" element={<Detail />} />
          <Route
            path="/results"
            element={<Results addOrRemoveFavs={addOrRemoveFavs} />}
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                favourites={favourites}
                addOrRemoveFavs={addOrRemoveFavs}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
