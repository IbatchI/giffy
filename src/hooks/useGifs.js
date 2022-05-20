import { useEffect, useContext, useState } from "react"
import GifsContex from '../Context/GifsContext'
import getGifs from '../services/getGifs'

const useGifs = ({ keyword }) => {
    const [loading, setLoading] = useState(false)
    const { gifs, setGifs } = useContext(GifsContex)

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword }).then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    }, [keyword, setGifs])

    return { loading, gifs }
}

export default useGifs