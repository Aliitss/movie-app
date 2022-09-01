import { Routes, Route } from 'react-router-dom'

/* COMPONENTS */
import Login from './components/Login/Login.jsx';
import Listado from './components/Listado/Listado.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Detail from './components/Details/Detail.jsx';
import Results from './components/Resultados/Results.jsx';

/* STYLES BOOTSTRAP */
import './css/bootstrap.min.css'
import './css/app.css'

function App() {

  const favMovies = localStorage.getItem('favs');

  let moviesInFavs;

  if (favMovies === null) {
    moviesInFavs = [];
  } else {
    moviesInFavs = JSON.parse(favMovies)
  }

  console.log(moviesInFavs)
  
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
      console.log("Movie has been added");
    } else {
      let removedMovies = moviesInFavs.filter((el) => {
        return el.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(removedMovies));
      console.log("Movie has been deleted");
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            path="/list"
            element={<Listado addOrRemoveFavs={addOrRemoveFavs} />}
          />
          <Route path="/detail" element={<Detail />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
