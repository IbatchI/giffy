import { useState } from "react"
import { Link, useLocation } from "wouter"

const Home = () => {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const FILTERS = ['futbol', 'basquet', 'messi']
    
    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    return (
        <>
            <h3>El mejor buscador de gifs</h3>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Buscar un gif'
                    type='text'
                    value={keyword}
                    onChange={handleChange}
                />
            </form>
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