import { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import './Testimonials.css';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import {Container} from 'react-bootstrap';


const Testimonials = () => {
    
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <Container>
            <div className='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[0].review}
                </span>
                <span>
                    <span style={{color: "orange"}}>
                        {testimonialsData[selected].name}
                    </span> {" "}
                    - {testimonialsData[selected].name}
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />

                <div className="arrows">
                    <img 
                    onClick={()=>{
                        selected === 0
                        ? setSelected(tLength - 1)
                        :setSelected((prev) => prev - 1);
                    }}
                    src={leftArrow} alt="" />
                    <img
                    onClick={()=>{
                        selected === tLength - 1
                        ? setSelected(0)
                        :setSelected((prev) => prev + 1);
                    }} src={rightArrow} alt="" />
                </div>
            </div>
        </div>
        </Container>
    )
}

export default Testimonials;