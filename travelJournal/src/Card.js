
import './styles/card.css'

export default function Card(item) {

    return (
        <div className='all-card-and-separator'>
        {item.id > 1 && <hr className='separator'></hr>}
            {/* Conditional rendering (selecciono todos menos el primero) */}
        <div className='all-card'>
        <div className='card'>
            <nav className='card-img'>
            <img src={`../img/${item.img}`}/>
            </nav>
            <nav className='card-main'>
            <span className="card-location"><img src='../img/map-917.png'></img>{item.location}<br></br></span> 
            <span className="card-place">{item.place}<br></br></span>
            <div className='dates'>
            <span className="card-data-from">{item.dataFrom} - </span>
            <span className="card-data-to">{item.dataTo}<br></br></span>
            </div>
            <span className="card-text">{item.text}</span>
            </nav>
        </div>
        </div>
        </div>
    )

    
}
