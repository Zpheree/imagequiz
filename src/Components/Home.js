import { Container, Row, Col, Card } from "react-bootstrap";
import local_temp_store from "../data_access_layer/local_temp_storage";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    let takeTheQuiz = (flowerName) => {
        navigate('/quiz/' + flowerName);
    };

    return (
        <Container className="images">
            <Row xs={1} md={3} className="g-4 text-center">
                {local_temp_store.getFlowers().map((x, index) => (
                    <Col key={index}>
                        <Card className="h-100" onClick={() => takeTheQuiz(x.name)}>
                            <Card.Img variant="top" src={x.picture} className="h-75"/>
                            <Card.Body>
                                <Card.Title>{x.name}</Card.Title>
                                <Card.Text>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}


export default Home;
