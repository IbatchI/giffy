import './ListOfGifs.css'
import Gif from "../Gif/Gif"

export default function ListOfGifs({ gifs }) {

    return (
        <div className='ListOfGifs'>
            {gifs.map(gif =>
                <Gif
                    id={gif.id}
                    key={gif.id}
                    title={gif.title}
                    url={gif.url}
                />
            )}
        </div>
    )
}