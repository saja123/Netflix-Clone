import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalMovie from "./ModalMovie";

function FavList() {
  const [favArr, setFavArr] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  console.log(favArr);

  const getFavMovies = () => {
    const serverURL = `${process.env.REACT_APP_Server}/getMovies`;
    axios.get(serverURL)
      .then((response) => {
        console.log(response.data);
        setFavArr(response.data);
      })
      .catch((rerror) => {
        console.log(rerror);
      });
  };


  useEffect(() => {
    getFavMovies();
  }, []);

  const deleteMovie = (cardId) => {
    const serverURL = `${process.env.REACT_APP_Server}/DELETE/${cardId}`;
    axios
      .delete(serverURL, cardId)
      .then((response) => {
        console.log(response.data);
      })
      .catch((rerror) => {
        console.log(rerror);
      });
  };

  return (
    <>
      <h1>Hi Form FavList</h1>
      {favArr.map(item => {
        console.log("This is item from favlist", item);
        return (
            <section>
                 <Card style={{ width: "18rem" }} key={item.id}>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.comment}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    deleteMovie(item.id);
                  }}
                >
                 Delete Movie
                </Button>
                <Button
                  variant="primary"
                  onClick={handleShow}
                >
                 UPDATE
                </Button>
              </Card.Body>
            </Card>

            <ModalMovie
             showModal={showModal}
             handleClose={handleClose}
             id={item.id}
             title={item.title}
             overview={item.overview}
             release_date={item.release_date}
             poster_path={item.poster_path}
             comment={item.comment} 
             location="favList"
         />
            </section>
          
        )
      })}
    </>
  );
}

export default FavList;
