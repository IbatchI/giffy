import { useState } from "react"
import { useLocation } from "wouter"
import './SearchGifs.css'

const SearchGifs = () => {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    
    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Buscar un gif...'
                type='text'
                value={keyword}
                onChange={handleChange}
            />
        </form>
    )
}

export default SearchGifs