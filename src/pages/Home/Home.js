import { Link } from "wouter"

const Home = () => {
    const FILTERS = ['futbol', 'basquet', 'messi']
    return (
        <>
            <h3>El mejor buscador de gifs</h3>
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