import getGifs from '../services/getGifs'
import { useEffect, useState } from "react"

const useGifs = ({ keyword }) => {
    const [loading, setLoading] = useState(false)
    const [gifs, updateGifs] = useState([])

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword }).then(gifs => {
            updateGifs(gifs)
            setLoading(false)
        })
    }, [keyword])

    return { loading, gifs }
}

export default useGifs