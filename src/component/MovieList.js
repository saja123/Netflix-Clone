import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalMovie from "./ModalMovie";
import { useState } from "react";

function MovieList(props) {
  console.log("this movie lis", props);

  const [showModalMap, setShowModalMap] = useState({});

  const handleShow = (id) => {
    setShowModalMap((prev) => ({ ...prev, [id]: true }));
  };

  const handleClose = (id) => {
    setShowModalMap((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <>
      {props.movieData.map((item) => {
        console.log("This is trading ", item);
        return (
          <section key={item.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text></Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleShow(item.id)}
                >
                  Add Card
                </Button>
              </Card.Body>
            </Card>

            <ModalMovie
              showModal={showModalMap[item.id]}
              handleClose={() => handleClose(item.id)}
              id={item.id}
              title={item.title}
              overview={item.overview}
              release_date={item.release_date}
              poster_path={item.poster_path}
              comment={item.comment}
              location={props.location}
            />
          </section>
        );
      })}
    </>
  );
}

export default MovieList;
