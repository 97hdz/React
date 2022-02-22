import './Name.css';
import Person_img from './img/me.jpg';
import Mail_logo from './img/mail.png';
import Linkedln_logo from './img/linkedln.png';


export default function Name() {
    return(
        <div className='header-and-name'>
            <img className='photo' src={Person_img}></img>
            <h3 className="name">Christian Hernandez</h3>
            <h4 className="job-title">Frontend Developer</h4>
            <h5 className="website">97h.it</h5>
            <div className="buttons">
                <button className='email-button'><img src={Mail_logo} className='mail-logo'></img><p> Email</p></button>
                <button className='linkedln-button'><img src={Linkedln_logo} className='linkedln-logo'></img> <p>LinkedIn</p></button>
            </div>
        </div>
    )
}