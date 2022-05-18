import'./Gif.css'
import { Link } from 'wouter'

export default function Gif({ title, id, url }) {
    return (
        <Link
            className="gif"
            to={`/detail/${id}`}
        >
            <h4>{title}</h4>
            <img alt={title} src={url}/>
        </Link>
    )
}   