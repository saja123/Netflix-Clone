import { useEffect, useState } from "react";
import MovieList from './MovieList';
import axios from "axios"

function Home() {
  const [movieData, setMovieData] = useState([]);
  console.log("This is my data in home", movieData);
  const getAllMovie = () => {
    const serverURL = `${process.env.REACT_APP_Server}/trending`;
    axios.get(serverURL)
      .then((response) => {
        setMovieData(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getAllMovie();
  }, [])
  return (

    <section className="home-class">
      <MovieList movieData={movieData} location="home" />
    </section>
  );
}

export default Home;