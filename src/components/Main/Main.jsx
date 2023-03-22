import './Main.css';
import {Container, Row, Col} from 'react-bootstrap';
import HeroImg from '../../assets/hero_image.png';
import Heart from '../../assets/heart.png';
import hero_img_back from '../../assets/hero_image_back.png';

const Main = () => {
    return (
        <Container className='main'>
            <Row>
                <Col xl={6}>
                <span className='span stroke-text'>Shape </span><span className='span'>Your</span><br />
                <span className='span-title'>ideal body</span>

                <p>In here we will help you to shape and build your ideal body and live up your life to fullest.</p>

                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert</span>
                    </div>
                    <div>
                        <span>+900</span>
                        <span>members</span>
                    </div>  
                    <a className='button-main'>Get started</a>
                    <a className='button-main-two'>Learn More</a>                 
                </div>
                
                </Col>
                <Col xl={6} className='right-main'>
                    <img src={hero_img_back} alt="" className='hero_img_back'/> 
                    <img src={HeroImg} alt="" className='hero-image'/>
                    <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span><span>116 bpm</span>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main