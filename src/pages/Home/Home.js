import { Link } from "wouter"
import SearchGifs from "../../components/SearchGifs/SearchGifs"

const Home = () => {
    const FILTERS = ['futbol', 'basquet', 'messi']
    return (
        <>
            <h3>El mejor buscador de gifs</h3>
            <SearchGifs/>
            <ul>
                {FILTERS.map(filter => (
                    <li key={filter}>
                        <Link to={`/search/${filter}`}>
                            Gifs de {filter}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home