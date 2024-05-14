import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";


function ModalMovie(props) {
    const addCard = (e) => {
        e.preventDefault();
        const serverURL = `${process.env.REACT_APP_Server}/addMovie`;
        const movieData = {
            title: props.title,
            release_date: props.release_date,
            poster_path: props.poster_path,
            overview: props.overview,
            comment: e.target.comment.value
        }
        axios.post(serverURL, movieData)
            .then((response) => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newComment = e.target.comment.value;
        const updatedComment = {
            comment: newComment
        }
        const url = `${process.env.REACT_APP_Server}/UPDATE/${props.id}`;

        axios.put(url, updatedComment)
            .then((response) => {
                console.log(response);
            }).catch()

        props.handleClose();
    }

    return (
        <>
            <Modal show={props.showModal} onHide={props.handleClose} key={props.id}>
                <Modal.Header closeButton>
                    <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Form key={props.id} onSubmit={props.location === "favList" ? handleSubmit : addCard} >
                    <Modal.Body>
                        <Form.Group className="mb-4 text-center" controlId="exampleForm.ControlInput1">
                            <img className='rounded' src={`https://image.tmdb.org/t/p/w185${props.poster_path}`} alt={props.title} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <h2>{props.title || "There is no Title"}</h2>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Add Some Comments</Form.Label>
                            <Form.Control as="textarea" name="comment" defaultValue={props.comment} type="text" rows={2} />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer className='class-but'>
                        <Button variant="secondary" onClick={props.handleClose}>
                            Close
                        </Button>
                        {props.location === "favList" ?
                            <Button variant="primary" type='submit'>
                                Save Changes
                            </Button>
                            :
                            <Button variant="primary" type='submit'>
                                Add Comments
                            </Button>
                        }
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default ModalMovie;