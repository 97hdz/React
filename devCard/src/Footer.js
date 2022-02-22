import './styles/Footer.css';
import Twitter_logo from './img/twitter.png';
import Github_logo from './img/github.png';
import Instagram_logo from './img/instagram.png';

export default function Footer(){
    return(
        <div className="footer-content">
            <div className='container-footer'>
            <img src={Twitter_logo}></img>
            <img src={Github_logo}></img>
            <img src={Instagram_logo}></img>
            </div>
        </div>
    )
}

