import { useContext } from "react"
import Gif from "../../components/Gif/Gif"
import GifsContext from "../../Context/GifsContext"

const Detail = ({ params }) => {
    const {id} = params
    const { gifs } = useContext(GifsContext)
    
    const gif = gifs.find(gif => gif.id === id)
    
    return (
        <>
            <h5>El detallito de</h5>
            <Gif
                {...gif}
            />
        </>
    )
}

export default Detail