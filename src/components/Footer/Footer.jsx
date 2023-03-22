import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';

const Footer = () => {
    return (
        <div className='Footer-container'>
            <hr />
            <div className="footer">
               <div className="social-links">
                 <img src={Github} alt="" />
                 <img src={Instagram} alt="" />
                 <img src={LinkedIn} alt="" />
               </div>
               <div className="logo-footer">
               <span className="nav-logo">Z</span><span className="mayusLogo">D</span><span className="point-logo">.</span>
               </div>
            </div>
        </div>
    )
}

export default Footer