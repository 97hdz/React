import '../styles/main.css' 
import { useEffect, useState } from 'react'

export default function Main(){    

    //getting all the memes data
    const [allMemeData, setAllMemeData] = useState('');
    useEffect(function() {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemeData(data))
        }, [])
        
    //construction of the useState, and setting the meme object 
    const [meme, setMeme] = useState({
        topText:'',
        bottomText: '',
        radonImage: 'http://i.imgflip.com/1bij.jpg'
    }) 
    
    function getMemeImage() {
        const memesArray = allMemeData.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            radonImage: url,
        }))
    }

    function handleText(event) {
        const {name, value, type} = event.target
        setMeme(prevMeme =>{
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }


    return(
        <div className='container-main'>
        <main className="main">

            <div className='form'>
                <input 
                    name="topText"
                    value={meme.topText}
                    type="text"
                    placeholder="Top Text"
                    className="form-input"
                    onChange={handleText}
                    />
                <input type="text" 
                    name="bottomText"
                    value={meme.bottomText}
                    type="text"
                    placeholder="Bottom Text"
                    className="form-input" 
                    onChange={handleText}
                />
                <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
            </div>

            <div className='meme'>
            <img className='meme-img' src={meme.radonImage}></img>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
        </div>
    )
}