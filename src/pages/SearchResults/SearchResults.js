import { useEffect, useState } from 'react'
import getGifs from '../../services/getGifs'
import Spinner from '../../components/Spinner/Spinner'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'

export default function SearchResults({ params }) {
    const [gifs, updateGifs] = useState([])
    const [loading, setLoading] = useState(false)
    const { keyword } = params

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword }).then(gifs => {
            updateGifs(gifs)
            setLoading(false)
        })
    }, [keyword])

    return (
        <div className='align-items'>
            {
                loading
                    ? <Spinner />
                    : <ListOfGifs gifs={gifs} />
            }
        </div>
    )
}