import '../styles/header.css'
import meme from '../img/meme.png'

export default function Header(){
    return (
        <div className='container-header'>
        <nav className="header" >
            <div className="header-left">
                <img className="header-logo" src={meme}></img>
                <h2 className="header-title">Meme Generator</h2>
            </div>
            <div className="header-right">
                <span className="header-right-text">97H</span>
            </div>
        </nav>
        </div>
    )
}