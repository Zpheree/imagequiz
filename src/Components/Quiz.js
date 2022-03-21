import { useParams } from "react-router-dom";
import local_temp_store from "../data_access_layer/local_temp_storage";
import { Container, Row, Col, Card, ListGroup, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

const Quiz = () => {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [quiz, setQuiz] = useState(undefined);
    const { id } = useParams();

    useEffect(() => {
        if (!quiz) {
            let x = local_temp_store.getQuiz(id);
            setQuiz(x);
            console.log(x);
        }
    });

    // alertClicked(() => {
    //     if (x === currentQuestionNumber) {

    //     }
    // });

    return (
        <Container>
            <Row xs={1} md={3} className="g-4 text-center">
                <Col>
                    {quiz ?
                        <Card className="h-100" >
                            <Card.Img variant="top" src={quiz.questions[currentQuestionNumber].picture} />
                            <Card.Body>
                                <Card.Title>{quiz.name}</Card.Title>
                                <Card.Text>
                                    Let's take the quiz now!
                                </Card.Text>
                            </Card.Body>
                            <ListGroup>
                                {quiz.questions[currentQuestionNumber].choices.map(x =>
                                    <ListGroup.Item>{x}</ListGroup.Item>
                                )}
                            </ListGroup>
                        </Card>
                        :
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>}
                </Col>
            </Row>
        </Container>
    );
}

export default Quiz;