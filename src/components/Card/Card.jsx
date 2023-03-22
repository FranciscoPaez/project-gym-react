import { Col, Container, Row } from 'react-bootstrap'
import './Card.css';
import Heart from '../../assets/heart.png'

const Card = () => {
    return (
        <Container>
            <Row>
                <Col xl={2}></Col>
                <Col xl={8}>
                    <Row>
                    <Col xl={4}>
                    <div className="card">
                            <img src={Heart} alt="" />
                            <h3>basic plan</h3>
                            <h4>$20</h4>
                            <div>
                              <p>2 hours of excercises</p>
                              <p>Free consultaion of Coaches</p>
                              <p>Access to comunity</p>
                            </div>

                            <a href="">Join now</a>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="card card-center">
                            <img src={Heart} alt="" />
                            <h3>premiun plan</h3>
                            <h4>$30</h4>
                            <div>
                              <p>5 hours of excercises</p>
                              <p>Free consultaion of Coaches</p>
                              <p>Access to minibar</p>
                            </div>

                            <a href="">Join now</a>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="card">
                            <img src={Heart} alt="" />
                            <h3>pro plan</h3>
                            <h4>$35</h4>
                            <div>
                              <p>8 hours of excercises</p>
                              <p>Consultation of Private Coach</p>
                              <p>Free Fitness Merchandises</p>
                            </div>

                            <a href="">Join now</a>
                        </div>
                    </Col>
                    </Row>
                </Col>
                <Col xl={2}></Col>
            </Row>
        </Container>
    )
}

export default Card